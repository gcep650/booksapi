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

var BooksDAO = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCb29rc0RBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBvb2wiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJjb25uZWN0aW9uTGltaXQiLCJ1c2VyIiwiZGF0YWJhc2UiLCJjYWxsYmFjayIsImJvb2tzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm4iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsImRhdGEiLCJwdXNoIiwiQm9va01vZGVsIiwiQk9PS19JRCIsIlRJVExFIiwiQVVUSE9SIiwiR0VOUkUiLCJQQUdFX0NPVU5UIiwiUFVCTElTSF9EQVRFIiwiaWQiLCJib29rIiwiZXJyb3IiLCJUaXRsZSIsIkF1dGhvciIsIkdlbnJlIiwiUGFnZV9jb3VudCIsIlB1Ymxpc2hfZGF0ZSIsImluc2VydElkIiwiQm9va19pZCIsImNoYW5nZWRSb3dzIiwiYWZmZWN0ZWRSb3dzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2RhdGFiYXNlL0Jvb2tzREFPLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2tNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvQm9va01vZGVsXCJcbmltcG9ydCAqIGFzIG15c3FsIGZyb20gXCJteXNxbFwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuXG5leHBvcnQgY2xhc3MgQm9va3NEQU8ge1xuXG4gICAgcHJpdmF0ZSBob3N0OnN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb3J0Om51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgdXNlcm5hbWU6c3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb29sOm15c3FsLlBvb2w7XG5cbiAgICBjb25zdHJ1Y3Rvcihob3N0OnN0cmluZywgcG9ydDpudW1iZXIsIHVzZXJuYW1lOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuXG4gICAgICAgIHRoaXMucG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woIHtcbiAgICAgICAgICAgIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBkYXRhYmFzZTogJ2NzdDM5MSdcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEJvb2tzKGNhbGxiYWNrOmFueSkge1xuICAgICAgICBsZXQgYm9va3M6Qm9va01vZGVsW10gPSBbXTtcblxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbigoZXJyOmFueSwgY29ubjpteXNxbC5Qb29sQ29ubmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICBjb25uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGJvb2tzJywgKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgcm93cy5sZW5ndGg7IHgrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHJvd3NbeF07XG4gICAgICAgICAgICAgICAgICAgIGJvb2tzLnB1c2gobmV3IEJvb2tNb2RlbChkYXRhLkJPT0tfSUQsIGRhdGEuVElUTEUsIGRhdGEuQVVUSE9SLCBkYXRhLkdFTlJFLCBkYXRhLlBBR0VfQ09VTlQsIGRhdGEuUFVCTElTSF9EQVRFKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJvb2tzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRCb29rKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIGxldCBib29rOkJvb2tNb2RlbDtcblxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbigoZXJyOmFueSwgY29ubjpteXNxbC5Qb29sQ29ubmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICBjb25uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIGJvb2tzIFdIRVJFIEJPT0tfSUQ9PycsW2lkXSwgKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gcm93c1swXTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBib29rID0gbmV3IEJvb2tNb2RlbChkYXRhLkJPT0tfSUQsIGRhdGEuVElUTEUsIGRhdGEuQVVUSE9SLCBkYXRhLkdFTlJFLCBkYXRhLlBBR0VfQ09VTlQsIGRhdGEuUFVCTElTSF9EQVRFKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh7XCJlcnJvclwiOiBcIkludmFsaWQgQm9vayBJRFwifSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGJvb2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZUJvb2soYm9vazpCb29rTW9kZWwsIGNhbGxiYWNrOmFueSkge1xuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbigoZXJyOmFueSwgY29ubjpteXNxbC5Qb29sQ29ubmVjdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuXG4gICAgICAgICAgICBjb25uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBib29rcyAoVElUTEUsIEFVVEhPUiwgR0VOUkUsIFBBR0VfQ09VTlQsIFBVQkxJU0hfREFURSkgVkFMVUVTICg/LD8sPyw/LD8pJyxcbiAgICAgICAgICAgIFtib29rLlRpdGxlLCBib29rLkF1dGhvciwgYm9vay5HZW5yZSwgYm9vay5QYWdlX2NvdW50LCBib29rLlB1Ymxpc2hfZGF0ZV0sIFxuICAgICAgICAgICAgKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socm93cy5pbnNlcnRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQm9vayhib29rOkJvb2tNb2RlbCwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKChlcnI6YW55LCBjb25uOm15c3FsLlBvb2xDb25uZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIGNvbm4ucXVlcnkoJ1VQREFURSBib29rcyBTRVQgVElUTEU9PywgQVVUSE9SPT8sIEdFTlJFPT8sIFBBR0VfQ09VTlQ9PywgUFVCTElTSF9EQVRFPT8gV0hFUkUgQk9PS19JRD0/JyxcbiAgICAgICAgICAgIFtib29rLlRpdGxlLCBib29rLkF1dGhvciwgYm9vay5HZW5yZSwgYm9vay5QYWdlX2NvdW50LCBib29rLlB1Ymxpc2hfZGF0ZSwgYm9vay5Cb29rX2lkXSwgXG4gICAgICAgICAgICAoZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyb3dzLmNoYW5nZWRSb3dzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVCb29rKGlkOm51bWJlciwgY2FsbGJhY2s6YW55KSB7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKChlcnI6YW55LCBjb25uOm15c3FsLlBvb2xDb25uZWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG5cbiAgICAgICAgICAgIGNvbm4ucXVlcnkoJ0RFTEVURSBGUk9NIGJvb2tzIFdIRVJFIEJPT0tfSUQ9PycsIFtpZF0sIChlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbm4ucmVsZWFzZSgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJvd3MuYWZmZWN0ZWRSb3dzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztJQUdhQSxRO0VBUVQsa0JBQVlDLElBQVosRUFBeUJDLElBQXpCLEVBQXNDQyxRQUF0QyxFQUF1REMsUUFBdkQsRUFBd0U7SUFBQTtJQUFBLDRDQU5sRCxFQU1rRDtJQUFBLDRDQUxsRCxDQUFDLENBS2lEO0lBQUEs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