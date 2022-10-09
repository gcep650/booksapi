import { BookModel } from "../models/BookModel"
import * as mysql from "mysql";
import * as util from "util";

/**
 * This class represents a Data Access Service for Books.
 *
 * @export
 * @class BooksDAO
 */
export class BooksDAO {

    private host:string = "";
    private port:number = -1;
    private username:string = "";
    private password:string = "";
    private pool:mysql.Pool;

    /**
     * Creates an instance of BooksDAO.
     * @param {string} host
     * @param {number} port
     * @param {string} username
     * @param {string} password
     * @memberof BooksDAO
     */
    constructor(host:string, port:number, username:string, password:string) {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;

        this.pool = mysql.createPool( {
            connectionLimit: 10,
            host: this.host,
            port: this.port,
            user: this.username,
            password: this.password,
            database: 'cst391'
        });
    }

    /**
     * Get a list of all books
     *
     * @param {*} callback
     * @memberof BooksDAO
     */
    public getBooks(callback:any) {
        let books:BookModel[] = [];

        this.pool.getConnection((err:any, conn:mysql.PoolConnection) => {
            if (err) throw err;

            conn.query('SELECT * FROM books', (err:any, rows:any, fields:any) => {
                conn.release();
                if (err) throw err;
                for (let x = 0; x < rows.length; x++) {
                    var data = rows[x];
                    books.push(new BookModel(data.BOOK_ID, data.TITLE, data.AUTHOR, data.GENRE, data.PAGE_COUNT, data.PUBLISH_DATE));
                }
                callback(books);
            });
        })
    }

    /**
     * Get a book by ID
     *
     * @param {number} id
     * @param {*} callback
     * @memberof BooksDAO
     */
    public getBook(id:number, callback:any) {
        let book:BookModel;

        this.pool.getConnection((err:any, conn:mysql.PoolConnection) => {
            if (err) throw err;

            conn.query('SELECT * FROM books WHERE BOOK_ID=?',[id], (err:any, rows:any, fields:any) => {
                conn.release();
                if (err) throw err;
                var data = rows[0];
                try {
                    book = new BookModel(data.BOOK_ID, data.TITLE, data.AUTHOR, data.GENRE, data.PAGE_COUNT, data.PUBLISH_DATE);
                } catch (error) {
                    callback({"error": "Invalid Book ID"});
                }
                callback(book);
            });
        })
    }

    /**
     * Creates a new book
     *
     * @param {BookModel} book
     * @param {*} callback
     * @memberof BooksDAO
     */
    public createBook(book:BookModel, callback:any) {
        this.pool.getConnection((err:any, conn:mysql.PoolConnection) => {
            if (err) throw err;

            conn.query('INSERT INTO books (TITLE, AUTHOR, GENRE, PAGE_COUNT, PUBLISH_DATE) VALUES (?,?,?,?,?)',
            [book.Title, book.Author, book.Genre, book.Page_count, book.Publish_date], 
            (err:any, rows:any, fields:any) => {
                conn.release();

                if (err) throw err;
                
                callback(rows.insertId);
            });
        })
    }

    /**
     * Updates a book
     *
     * @param {BookModel} book
     * @param {*} callback
     * @memberof BooksDAO
     */
    public updateBook(book:BookModel, callback:any) {
        this.pool.getConnection((err:any, conn:mysql.PoolConnection) => {
            if (err) throw err;

            conn.query('UPDATE books SET TITLE=?, AUTHOR=?, GENRE=?, PAGE_COUNT=?, PUBLISH_DATE=? WHERE BOOK_ID=?',
            [book.Title, book.Author, book.Genre, book.Page_count, book.Publish_date, book.Book_id], 
            (err:any, rows:any, fields:any) => {
                conn.release();

                if (err) throw err;
                
                callback(rows.changedRows);
            });
        })
    }

    /**
     * Deletes a book with the given ID
     *
     * @param {number} id
     * @param {*} callback
     * @memberof BooksDAO
     */
    public deleteBook(id:number, callback:any) {
        this.pool.getConnection((err:any, conn:mysql.PoolConnection) => {
            if (err) throw err;

            conn.query('DELETE FROM books WHERE BOOK_ID=?', [id], (err:any, rows:any, fields:any) => {
                conn.release();

                if (err) throw err;
                
                callback(rows.affectedRows);
            });
        })
    }
}