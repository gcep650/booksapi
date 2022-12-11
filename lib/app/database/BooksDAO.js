"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BooksDAO = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _BookModel = require("../models/BookModel");

var mysql = _interopRequireWildcard(require("mysql"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * This class represents a Data Access Service for Books.
 *
 * @export
 * @class BooksDAO
 */
var BooksDAO = /*#__PURE__*/function () {
  /**
   * Creates an instance of BooksDAO.
   * @param {string} host
   * @param {number} port
   * @param {string} username
   * @param {string} password
   * @memberof BooksDAO
   */
  function BooksDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, BooksDAO);
    (0, _defineProperty2.default)(this, "host", "");
    (0, _defineProperty2.default)(this, "port", -1);
    (0, _defineProperty2.default)(this, "username", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "pool", void 0);
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = mysql.createPool({
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


  (0, _createClass2.default)(BooksDAO, [{
    key: "getBooks",
    value: function getBooks(callback) {
      var books = [];
      this.pool.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM books', function (err, rows, fields) {
          conn.release();
          if (err) throw err;

          for (var x = 0; x < rows.length; x++) {
            var data = rows[x];
            books.push(new _BookModel.BookModel(data.BOOK_ID, data.TITLE, data.AUTHOR, data.GENRE, data.PAGE_COUNT, data.PUBLISH_DATE));
          }

          callback(books);
        });
      });
    }
    /**
     * Get a book by ID
     *
     * @param {number} id
     * @param {*} callback
     * @memberof BooksDAO
     */

  }, {
    key: "getBook",
    value: function getBook(id, callback) {
      var book;
      this.pool.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('SELECT * FROM books WHERE BOOK_ID=?', [id], function (err, rows, fields) {
          conn.release();
          if (err) throw err;
          var data = rows[0];

          try {
            book = new _BookModel.BookModel(data.BOOK_ID, data.TITLE, data.AUTHOR, data.GENRE, data.PAGE_COUNT, data.PUBLISH_DATE);
          } catch (error) {
            callback({
              "error": "Invalid Book ID"
            });
          }

          callback(book);
        });
      });
    }
    /**
     * Creates a new book
     *
     * @param {BookModel} book
     * @param {*} callback
     * @memberof BooksDAO
     */

  }, {
    key: "createBook",
    value: function createBook(book, callback) {
      this.pool.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('INSERT INTO books (TITLE, AUTHOR, GENRE, PAGE_COUNT, PUBLISH_DATE) VALUES (?,?,?,?,?)', [book.Title, book.Author, book.Genre, book.Page_count, book.Publish_date], function (err, rows, fields) {
          conn.release();
          if (err) throw err;
          callback(rows.insertId);
        });
      });
    }
    /**
     * Updates a book
     *
     * @param {BookModel} book
     * @param {*} callback
     * @memberof BooksDAO
     */

  }, {
    key: "updateBook",
    value: function updateBook(book, callback) {
      this.pool.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('UPDATE books SET TITLE=?, AUTHOR=?, GENRE=?, PAGE_COUNT=?, PUBLISH_DATE=? WHERE BOOK_ID=?', [book.Title, book.Author, book.Genre, book.Page_count, book.Publish_date, book.Book_id], function (err, rows, fields) {
          conn.release();
          if (err) throw err;
          callback(rows.changedRows);
        });
      });
    }
    /**
     * Deletes a book with the given ID
     *
     * @param {number} id
     * @param {*} callback
     * @memberof BooksDAO
     */

  }, {
    key: "deleteBook",
    value: function deleteBook(id, callback) {
      this.pool.getConnection(function (err, conn) {
        if (err) throw err;
        conn.query('DELETE FROM books WHERE BOOK_ID=?', [id], function (err, rows, fields) {
          conn.release();
          if (err) throw err;
          callback(rows.affectedRows);
        });
      });
    }
  }]);
  return BooksDAO;
}();

exports.BooksDAO = BooksDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCb29rc0RBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBvb2wiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJjb25uZWN0aW9uTGltaXQiLCJ1c2VyIiwiZGF0YWJhc2UiLCJjYWxsYmFjayIsImJvb2tzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm4iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsImRhdGEiLCJwdXNoIiwiQm9va01vZGVsIiwiQk9PS19JRCIsIlRJVExFIiwiQVVUSE9SIiwiR0VOUkUiLCJQQUdFX0NPVU5UIiwiUFVCTElTSF9EQVRFIiwiaWQiLCJib29rIiwiZXJyb3IiLCJUaXRsZSIsIkF1dGhvciIsIkdlbnJlIiwiUGFnZV9jb3VudCIsIlB1Ymxpc2hfZGF0ZSIsImluc2VydElkIiwiQm9va19pZCIsImNoYW5nZWRSb3dzIiwiYWZmZWN0ZWRSb3dzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2RhdGFiYXNlL0Jvb2tzREFPLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvQm9va01vZGVsXCJcbmltcG9ydCAqIGFzIG15c3FsIGZyb20gXCJteXNxbFwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyBhIERhdGEgQWNjZXNzIFNlcnZpY2UgZm9yIEJvb2tzLlxuICpcbiAqIEBleHBvcnRcbiAqIEBjbGFzcyBCb29rc0RBT1xuICovXG5leHBvcnQgY2xhc3MgQm9va3NEQU8ge1xuXG4gICAgcHJpdmF0ZSBob3N0OnN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb3J0Om51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb29sOm15c3FsLlBvb2w7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIEJvb2tzREFPLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvcnRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmRcbiAgICAgKiBAbWVtYmVyb2YgQm9va3NEQU9cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihob3N0OnN0cmluZywgcG9ydDpudW1iZXIsIHVzZXJuYW1lOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXG4gICAgICAgIHRoaXMucG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBkYXRhYmFzZTogJ2NzdDM5MSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiBhbGwgYm9va3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICAgKiBAbWVtYmVyb2YgQm9va3NEQU9cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Qm9va3MoY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIGxldCBib29rczpCb29rTW9kZWxbXSA9IFtdO1xuXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKChlcnI6YW55LCBjb25uOm15c3FsLlBvb2xDb25uZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIGNvbm4ucXVlcnkoJ1NFTEVDVCAqIEZST00gYm9va3MnLCAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCByb3dzLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcm93c1t4XTtcbiAgICAgICAgICAgICAgICAgICAgYm9va3MucHVzaChuZXcgQm9va01vZGVsKGRhdGEuQk9PS19JRCwgZGF0YS5USVRMRSwgZGF0YS5BVVRIT1IsIGRhdGEuR0VOUkUsIGRhdGEuUEFHRV9DT1VOVCwgZGF0YS5QVUJMSVNIX0RBVEUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYm9va3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgYm9vayBieSBJRFxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJvZiBCb29rc0RBT1xuICAgICAqL1xuICAgIHB1YmxpYyBnZXRCb29rKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIGxldCBib29rOkJvb2tNb2RlbDtcblxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbigoZXJyOmFueSwgY29ubjpteXNxbC5Qb29sQ29ubmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICBjb25uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGJvb2tzIFdIRVJFIEJPT0tfSUQ9PycsW2lkXSwgKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcm93c1swXTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBib29rID0gbmV3IEJvb2tNb2RlbChkYXRhLkJPT0tfSUQsIGRhdGEuVElUTEUsIGRhdGEuQVVUSE9SLCBkYXRhLkdFTlJFLCBkYXRhLlBBR0VfQ09VTlQsIGRhdGEuUFVCTElTSF9EQVRFKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XCJlcnJvclwiOiBcIkludmFsaWQgQm9vayBJRFwifSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJvb2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBib29rXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2tNb2RlbH0gYm9va1xuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICAgKiBAbWVtYmVyb2YgQm9va3NEQU9cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlQm9vayhib29rOkJvb2tNb2RlbCwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKChlcnI6YW55LCBjb25uOm15c3FsLlBvb2xDb25uZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIGNvbm4ucXVlcnkoJ0lOU0VSVCBJTlRPIGJvb2tzIChUSVRMRSwgQVVUSE9SLCBHRU5SRSwgUEFHRV9DT1VOVCwgUFVCTElTSF9EQVRFKSBWQUxVRVMgKD8sPyw/LD8sPyknLFxuICAgICAgICAgICAgW2Jvb2suVGl0bGUsIGJvb2suQXV0aG9yLCBib29rLkdlbnJlLCBib29rLlBhZ2VfY291bnQsIGJvb2suUHVibGlzaF9kYXRlXSwgXG4gICAgICAgICAgICAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyb3dzLmluc2VydElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYSBib29rXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2tNb2RlbH0gYm9va1xuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICAgKiBAbWVtYmVyb2YgQm9va3NEQU9cbiAgICAgKi9cbiAgICBwdWJsaWMgdXBkYXRlQm9vayhib29rOkJvb2tNb2RlbCwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKChlcnI6YW55LCBjb25uOm15c3FsLlBvb2xDb25uZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIGNvbm4ucXVlcnkoJ1VQREFURSBib29rcyBTRVQgVElUTEU9PywgQVVUSE9SPT8sIEdFTlJFPT8sIFBBR0VfQ09VTlQ9PywgUFVCTElTSF9EQVRFPT8gV0hFUkUgQk9PS19JRD0/JyxcbiAgICAgICAgICAgIFtib29rLlRpdGxlLCBib29rLkF1dGhvciwgYm9vay5HZW5yZSwgYm9vay5QYWdlX2NvdW50LCBib29rLlB1Ymxpc2hfZGF0ZSwgYm9vay5Cb29rX2lkXSwgXG4gICAgICAgICAgICAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyb3dzLmNoYW5nZWRSb3dzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgYSBib29rIHdpdGggdGhlIGdpdmVuIElEXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaWRcbiAgICAgKiBAcGFyYW0geyp9IGNhbGxiYWNrXG4gICAgICogQG1lbWJlcm9mIEJvb2tzREFPXG4gICAgICovXG4gICAgcHVibGljIGRlbGV0ZUJvb2soaWQ6bnVtYmVyLCBjYWxsYmFjazphbnkpIHtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oKGVycjphbnksIGNvbm46bXlzcWwuUG9vbENvbm5lY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcblxuICAgICAgICAgICAgY29ubi5xdWVyeSgnREVMRVRFIEZST00gYm9va3MgV0hFUkUgQk9PS19JRD0/JywgW2lkXSwgKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socm93cy5hZmZlY3RlZFJvd3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ2FB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