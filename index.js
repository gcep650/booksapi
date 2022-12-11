const { BookModel } = require("./lib/app/models/BookModel");
const { BooksDAO } = require("./lib/app/database/BooksDAO");
const bodyParser = require('body-parser');
const cors = require('cors')

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () {
    console.log("Express server listening on port " + port);
});

app.use(bodyParser.json());
app.use(cors());

// database config
const dbHost = 'localhost'
const dbPort = 3306;
const dbUsername = 'root';
const dbPassword = 'root';

// GET route for /books - returns list of all Books
app.get('/books', (req, res) => {
    console.log("GET route /books");
    let dao = new BooksDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.getBooks((books) => {
        res.json(books);
    });
});

// GET route for /books/:id - returns book with given id
app.get('/books/:id', (req, res) => {
    console.log("GET route /books/:id");
    let dao = new BooksDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.getBook(req.params.id, (book) => {
        if (book != null && book.error != null) {
            res.status(400).send(book);
        }
        else {
            res.json(book);
        }
    });
})

// POST route for /books - creates a new book
app.post('/books', (req, res) => {
    console.log('POST route /books, data: ' + JSON.stringify(req.body));
    if (!req.body.title) {
        res.status(400).json({error: "Invalid Book Posted!"});
    }
    else {
        let book = new BookModel(-1, req.body.title, req.body.author, req.body.genre, req.body.page_count, req.body.publish_date);
        let dao = new BooksDAO(dbHost, dbPort, dbUsername, dbPassword);
        dao.createBook(book, (book_id) => {
            if (book_id == -1) {
                res.status(200).json({"error": "Error creating book."});
            }
            else {
                res.status(200).json({"success": "Created book with ID " + book_id});
            }
        });
    }
});

// PUT route for /books/:id
app.put('/books/:id', (req, res) => {
    console.log('PUT route /books/:id, data: ' + JSON.stringify(req.body));
    if (!req.body.title) {
        res.status(400).json({error: "Invalid Book Posted!"});
    }
    else {
        let book = new BookModel(req.params.id, req.body.title, req.body.author, req.body.genre, req.body.page_count, req.body.publish_date);
        let dao = new BooksDAO(dbHost, dbPort, dbUsername, dbPassword);
        dao.updateBook(book, (rowsChanged) => {
            if (rowsChanged == 0) {
                res.status(200).json({"error": "Error updating book."});
            }
            else {
                res.status(200).json({"success": "Successfully updated book with ID " + book.book_id});
            }
        });
    }
})

// DELETE route for /books/:id
app.delete('/books/:id', (req, res) => {
    console.log('DELETE route /books/:id');
    let dao = new BooksDAO(dbHost, dbPort, dbUsername, dbPassword);
    dao.deleteBook(req.params.id, (affectedRows) => {
        if (affectedRows == 0) {
            res.status(200).json({"error": "Error deleting book."});
        }
        else {
            res.status(200).json({"success": "Successfully deleted book."});
        }
    })
})