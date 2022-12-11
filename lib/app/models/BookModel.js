"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookModel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

/**
 * This class represents a Book object
 *
 * @export
 * @class BookModel
 */
var BookModel = /*#__PURE__*/function () {
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
  function BookModel(book_id, title, author, genre, page_count, publish_date) {
    (0, _classCallCheck2.default)(this, BookModel);
    (0, _defineProperty2.default)(this, "book_id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "author", "");
    (0, _defineProperty2.default)(this, "genre", "");
    (0, _defineProperty2.default)(this, "page_count", -1);
    (0, _defineProperty2.default)(this, "publish_date", new Date());
    this.book_id = book_id;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.page_count = page_count;
    this.publish_date = publish_date;
  }

  (0, _createClass2.default)(BookModel, [{
    key: "Book_id",
    get: function get() {
      return this.book_id;
    },
    set: function set(value) {
      this.book_id = value;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(value) {
      this.title = value;
    }
  }, {
    key: "Author",
    get: function get() {
      return this.author;
    },
    set: function set(value) {
      this.author = value;
    }
  }, {
    key: "Genre",
    get: function get() {
      return this.genre;
    },
    set: function set(value) {
      this.genre = value;
    }
  }, {
    key: "Page_count",
    get: function get() {
      return this.page_count;
    },
    set: function set(value) {
      this.page_count = value;
    }
  }, {
    key: "Publish_date",
    get: function get() {
      return this.publish_date;
    },
    set: function set(value) {
      this.publish_date = value;
    }
  }]);
  return BookModel;
}();

exports.BookModel = BookModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCb29rTW9kZWwiLCJib29rX2lkIiwidGl0bGUiLCJhdXRob3IiLCJnZW5yZSIsInBhZ2VfY291bnQiLCJwdWJsaXNoX2RhdGUiLCJEYXRlIiwidmFsdWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL0Jvb2tNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIGEgQm9vayBvYmplY3RcbiAqXG4gKiBAZXhwb3J0XG4gKiBAY2xhc3MgQm9va01vZGVsXG4gKi9cbmV4cG9ydCBjbGFzcyBCb29rTW9kZWwge1xuICAgIHByaXZhdGUgYm9va19pZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGF1dGhvcjogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGdlbnJlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcGFnZV9jb3VudDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBwdWJsaXNoX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBCb29rTW9kZWwuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJvb2tfaWRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYXV0aG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGdlbnJlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBhZ2VfY291bnRcbiAgICAgKiBAcGFyYW0ge0RhdGV9IHB1Ymxpc2hfZGF0ZVxuICAgICAqIEBtZW1iZXJvZiBCb29rTW9kZWxcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihib29rX2lkOm51bWJlciwgdGl0bGU6c3RyaW5nLCBhdXRob3I6c3RyaW5nLCBnZW5yZTpzdHJpbmcsIHBhZ2VfY291bnQ6bnVtYmVyLCBwdWJsaXNoX2RhdGU6RGF0ZSkge1xuICAgICAgICB0aGlzLmJvb2tfaWQgPSBib29rX2lkO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLmdlbnJlID0gZ2VucmU7XG4gICAgICAgIHRoaXMucGFnZV9jb3VudCA9IHBhZ2VfY291bnQ7XG4gICAgICAgIHRoaXMucHVibGlzaF9kYXRlID0gcHVibGlzaF9kYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgQm9va19pZCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5ib29rX2lkO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEJvb2tfaWQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLmJvb2tfaWQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBUaXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBUaXRsZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBBdXRob3IoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aG9yO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IEF1dGhvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgR2VucmUoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VucmU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgR2VucmUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmdlbnJlID0gdmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgUGFnZV9jb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlX2NvdW50O1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFBhZ2VfY291bnQodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhZ2VfY291bnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBQdWJsaXNoX2RhdGUoKTogRGF0ZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1Ymxpc2hfZGF0ZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBQdWJsaXNoX2RhdGUodmFsdWU6IERhdGUpIHtcbiAgICAgICAgdGhpcy5wdWJsaXNoX2RhdGUgPSB2YWx1ZTtcbiAgICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDYUEsUztFQVFUO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0ksbUJBQVlDLE9BQVosRUFBNEJDLEtBQTVCLEVBQTBDQyxNQUExQyxFQUF5REMsS0FBekQsRUFBdUVDLFVBQXZFLEVBQTBGQyxZQUExRixFQUE2RztJQUFBO0lBQUEsK0NBakJuRixDQUFDLENBaUJrRjtJQUFBLDZDQWhCckYsRUFnQnFGO0lBQUEsOENBZnBGLEVBZW9GO0lBQUEsNkNBZHJGLEVBY3FGO0lBQUEsa0RBYmhGLENBQUMsQ0FhK0U7SUFBQSxvREFaaEYsSUFBSUMsSUFBSixFQVlnRjtJQUN6RyxLQUFLTixPQUFMLEdBQWVBLE9BQWY7SUFDQSxLQUFLQyxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWNBLE1BQWQ7SUFDQSxLQUFLQyxLQUFMLEdBQWFBLEtBQWI7SUFDQSxLQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtJQUNBLEtBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0VBQ0g7Ozs7U0FFRCxlQUE2QjtNQUN6QixPQUFPLEtBQUtMLE9BQVo7SUFDSCxDO1NBQ0QsYUFBbUJPLEtBQW5CLEVBQWtDO01BQzlCLEtBQUtQLE9BQUwsR0FBZU8sS0FBZjtJQUNIOzs7U0FDRCxlQUEyQjtNQUN2QixPQUFPLEtBQUtOLEtBQVo7SUFDSCxDO1NBQ0QsYUFBaUJNLEtBQWpCLEVBQWdDO01BQzVCLEtBQUtOLEtBQUwsR0FBYU0sS0FBYjtJQUNIOzs7U0FDRCxlQUE0QjtNQUN4QixPQUFPLEtBQUtMLE1BQVo7SUFDSCxDO1NBQ0QsYUFBa0JLLEtBQWxCLEVBQWlDO01BQzdCLEtBQUtMLE1BQUwsR0FBY0ssS0FBZDtJQUNIOzs7U0FDRCxlQUEyQjtNQUN2QixPQUFPLEtBQUtKLEtBQVo7SUFDSCxDO1NBQ0QsYUFBaUJJLEtBQWpCLEVBQWdDO01BQzVCLEtBQUtKLEtBQUwsR0FBYUksS0FBYjtJQUNIOzs7U0FDRCxlQUFnQztNQUM1QixPQUFPLEtBQUtILFVBQVo7SUFDSCxDO1NBQ0QsYUFBc0JHLEtBQXRCLEVBQXFDO01BQ2pDLEtBQUtILFVBQUwsR0FBa0JHLEtBQWxCO0lBQ0g7OztTQUNELGVBQWdDO01BQzVCLE9BQU8sS0FBS0YsWUFBWjtJQUNILEM7U0FDRCxhQUF3QkUsS0FBeEIsRUFBcUM7TUFDakMsS0FBS0YsWUFBTCxHQUFvQkUsS0FBcEI7SUFDSCJ9