"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BookModel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var BookModel = /*#__PURE__*/function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCb29rTW9kZWwiLCJib29rX2lkIiwidGl0bGUiLCJhdXRob3IiLCJnZW5yZSIsInBhZ2VfY291bnQiLCJwdWJsaXNoX2RhdGUiLCJEYXRlIiwidmFsdWUiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL0Jvb2tNb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm9va01vZGVsIHtcbiAgICBwcml2YXRlIGJvb2tfaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgdGl0bGU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBhdXRob3I6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBnZW5yZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIHBhZ2VfY291bnQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgcHVibGlzaF9kYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcblxuICAgIGNvbnN0cnVjdG9yKGJvb2tfaWQ6bnVtYmVyLCB0aXRsZTpzdHJpbmcsIGF1dGhvcjpzdHJpbmcsIGdlbnJlOnN0cmluZywgcGFnZV9jb3VudDpudW1iZXIsIHB1Ymxpc2hfZGF0ZTpEYXRlKSB7XG4gICAgICAgIHRoaXMuYm9va19pZCA9IGJvb2tfaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgIHRoaXMuZ2VucmUgPSBnZW5yZTtcbiAgICAgICAgdGhpcy5wYWdlX2NvdW50ID0gcGFnZV9jb3VudDtcbiAgICAgICAgdGhpcy5wdWJsaXNoX2RhdGUgPSBwdWJsaXNoX2RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBCb29rX2lkKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvb2tfaWQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQm9va19pZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYm9va19pZCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFRpdGxlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFRpdGxlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IEF1dGhvcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRob3I7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgQXV0aG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5hdXRob3IgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBHZW5yZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZW5yZTtcbiAgICB9XG4gICAgcHVibGljIHNldCBHZW5yZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ2VucmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBQYWdlX2NvdW50KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VfY291bnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgUGFnZV9jb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucGFnZV9jb3VudCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IFB1Ymxpc2hfZGF0ZSgpOiBEYXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGlzaF9kYXRlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IFB1Ymxpc2hfZGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgICAgICB0aGlzLnB1Ymxpc2hfZGF0ZSA9IHZhbHVlO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztJQUFhQSxTO0VBUVQsbUJBQVlDLE9BQVosRUFBNEJDLEtBQTVCLEVBQTBDQyxNQUExQyxFQUF5REMsS0FBekQsRUFBdUVDLFVBQXZFLEVBQTBGQyxZQUExRixFQUE2RztJQUFBO0lBQUEsK0NBUG5GLENBQUMsQ0FPa0Y7SUFBQSw2Q0FOckYsRUFNcUY7SUFBQSw4Q0FMcEYsRUFLb0Y7SUFBQSw2Q0FKckYsRUFJcUY7SUFBQSxrREFIaEYsQ0FBQyxDQUcrRTtJQUFBLG9EQUZoRixJQUFJQyxJQUFKLEVBRWdGO0lBQ3pHLEtBQUtOLE9BQUwsR0FBZUEsT0FBZjtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLE1BQUwsR0FBY0EsTUFBZDtJQUNBLEtBQUtDLEtBQUwsR0FBYUEsS0FBYjtJQUNBLEtBQUtDLFVBQUwsR0FBa0JBLFVBQWxCO0lBQ0EsS0FBS0MsWUFBTCxHQUFvQkEsWUFBcEI7RUFDSDs7OztTQUVELGVBQTZCO01BQ3pCLE9BQU8sS0FBS0wsT0FBWjtJQUNILEM7U0FDRCxhQUFtQk8sS0FBbkIsRUFBa0M7TUFDOUIsS0FBS1AsT0FBTCxHQUFlTyxLQUFmO0lBQ0g7OztTQUNELGVBQTJCO01BQ3ZCLE9BQU8sS0FBS04sS0FBWjtJQUNILEM7U0FDRCxhQUFpQk0sS0FBakIsRUFBZ0M7TUFDNUIsS0FBS04sS0FBTCxHQUFhTSxLQUFiO0lBQ0g7OztTQUNELGVBQTRCO01BQ3hCLE9BQU8sS0FBS0wsTUFBWjtJQUNILEM7U0FDRCxhQUFrQkssS0FBbEIsRUFBaUM7TUFDN0IsS0FBS0wsTUFBTCxHQUFjSyxLQUFkO0lBQ0g7OztTQUNELGVBQTJCO01BQ3ZCLE9BQU8sS0FBS0osS0FBWjtJQUNILEM7U0FDRCxhQUFpQkksS0FBakIsRUFBZ0M7TUFDNUIsS0FBS0osS0FBTCxHQUFhSSxLQUFiO0lBQ0g7OztTQUNELGVBQWdDO01BQzVCLE9BQU8sS0FBS0gsVUFBWjtJQUNILEM7U0FDRCxhQUFzQkcsS0FBdEIsRUFBcUM7TUFDakMsS0FBS0gsVUFBTCxHQUFrQkcsS0FBbEI7SUFDSDs7O1NBQ0QsZUFBZ0M7TUFDNUIsT0FBTyxLQUFLRixZQUFaO0lBQ0gsQztTQUNELGFBQXdCRSxLQUF4QixFQUFxQztNQUNqQyxLQUFLRixZQUFMLEdBQW9CRSxLQUFwQjtJQUNIIn0=