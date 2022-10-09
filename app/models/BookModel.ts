
/**
 * This class represents a Book object
 *
 * @export
 * @class BookModel
 */
export class BookModel {
    private book_id: number = -1;
    private title: string = "";
    private author: string = "";
    private genre: string = "";
    private page_count: number = -1;
    private publish_date: Date = new Date();

    /**
     * Creates an instance of BookModel.
     * @param {number} book_id
     * @param {string} title
     * @param {string} author
     * @param {string} genre
     * @param {number} page_count
     * @param {Date} publish_date
     * @memberof BookModel
     */
    constructor(book_id:number, title:string, author:string, genre:string, page_count:number, publish_date:Date) {
        this.book_id = book_id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.page_count = page_count;
        this.publish_date = publish_date;
    }

    public get Book_id(): number {
        return this.book_id;
    }
    public set Book_id(value: number) {
        this.book_id = value;
    }
    public get Title(): string {
        return this.title;
    }
    public set Title(value: string) {
        this.title = value;
    }
    public get Author(): string {
        return this.author;
    }
    public set Author(value: string) {
        this.author = value;
    }
    public get Genre(): string {
        return this.genre;
    }
    public set Genre(value: string) {
        this.genre = value;
    }
    public get Page_count(): number {
        return this.page_count;
    }
    public set Page_count(value: number) {
        this.page_count = value;
    }
    public get Publish_date(): Date {
        return this.publish_date;
    }
    public set Publish_date(value: Date) {
        this.publish_date = value;
    }
}