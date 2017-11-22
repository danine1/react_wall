webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AppComponent = __webpack_require__(28);

var _AppComponent2 = _interopRequireDefault(_AppComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//render the App (component) in element id="react-app"
_reactDom2.default.render(_react2.default.createElement(_AppComponent2.default, null), document.getElementById('react-app'));

//import the App component

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _HeaderComponent = __webpack_require__(29);

var _HeaderComponent2 = _interopRequireDefault(_HeaderComponent);

var _ContactsComponent = __webpack_require__(30);

var _ContactsComponent2 = _interopRequireDefault(_ContactsComponent);

var _FeedComponent = __webpack_require__(31);

var _FeedComponent2 = _interopRequireDefault(_FeedComponent);

var _LeftMenuComponent = __webpack_require__(34);

var _LeftMenuComponent2 = _interopRequireDefault(_LeftMenuComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
        _inherits(App, _React$Component);

        function App() {
                _classCallCheck(this, App);

                return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
        }

        _createClass(App, [{
                key: 'postWasAdded',
                value: function postWasAdded() {
                        this.header.raiseNrOfPosts();
                }
        }, {
                key: 'render',
                value: function render() {
                        var _this2 = this;

                        return _react2.default.createElement(
                                'div',
                                { id: 'page' },
                                _react2.default.createElement(_HeaderComponent2.default, { ref: function ref(el) {
                                                _this2.header = el;
                                        } }),
                                _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(_LeftMenuComponent2.default, null),
                                        _react2.default.createElement(_FeedComponent2.default, { postWasAdded: this.postWasAdded.bind(this) }),
                                        _react2.default.createElement(_ContactsComponent2.default, null)
                                )
                        );
                }
        }]);

        return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

        _this.state = {
            unread_posts: 0
        };
        return _this;
    }

    _createClass(Header, [{
        key: 'raiseNrOfPosts',
        value: function raiseNrOfPosts() {
            this.setState({
                unread_posts: this.state.unread_posts + 1
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'header',
                null,
                'Unread posts: ',
                _react2.default.createElement(
                    'span',
                    { className: 'unread' },
                    this.state.unread_posts
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_React$Component) {
    _inherits(Contacts, _React$Component);

    function Contacts(props) {
        _classCallCheck(this, Contacts);

        return _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props)); //call the constructor of React.Component
    }

    _createClass(Contacts, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'nav',
                { className: 'contacts' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'Contacts'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Mark Zuckerberg'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Jana Ve\u010Derkov\xE1'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Ada Lovelace'
                )
            );
        }
    }]);

    return Contacts;
}(_react2.default.Component);

exports.default = Contacts;

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(15);

var _jquery2 = _interopRequireDefault(_jquery);

var _NewPostFormComponent = __webpack_require__(32);

var _NewPostFormComponent2 = _interopRequireDefault(_NewPostFormComponent);

var _PostComponent = __webpack_require__(33);

var _PostComponent2 = _interopRequireDefault(_PostComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Feed = function (_React$Component) {
    _inherits(Feed, _React$Component);

    function Feed(props) {
        _classCallCheck(this, Feed);

        //call the constructor of React.Component -- in PHP parent::construct($props)

        //set initial state
        var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));

        _this.state = { //the only time that we assign directly to the state
            posts: [],

            //illustrational data below
            orderBy: 'date',
            limit: 10,
            from_friends_only: false,
            current_datetime: null
        };

        return _this;
    }

    //componentDidMount is automatically called after component has been rendered


    _createClass(Feed, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            this.refreshPosts();
        }
    }, {
        key: 'refreshPosts',
        value: function refreshPosts() {
            var _this2 = this;

            _jquery2.default.ajax({
                method: 'get',
                url: 'api/all-posts.php',
                dataType: 'json',
                success: function success(data) {
                    _this2.setState({
                        posts: data.posts
                    });
                }
            });
        }
    }, {
        key: 'newPostWasAdded',
        value: function newPostWasAdded() {
            this.refreshPosts();

            //tell parent
            this.props.postWasAdded();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            //prepare an array of <Post /> components
            var posts = []; //prepare an empty array
            for (var i in this.state.posts) {
                //foreach of the data
                var post_data = this.state.posts[i];

                //add one <Post /> component to the array
                posts[i] = _react2.default.createElement(_PostComponent2.default, {
                    key: post_data.id,
                    title: post_data.title,
                    text: post_data.text,
                    published_at: post_data.published_at,
                    likes: post_data.likes
                });
            }
            this.state;
            return _react2.default.createElement(
                'div',
                { className: 'feed' },
                _react2.default.createElement(_NewPostFormComponent2.default, { functionToRun: this.newPostWasAdded.bind(this) }),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this3.refreshPosts();
                        } },
                    'refresh'
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    posts
                )
            );
        }
    }]);

    return Feed;
}(_react2.default.Component);

exports.default = Feed;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = __webpack_require__(15);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPostForm = function (_React$Component) {
    _inherits(NewPostForm, _React$Component);

    function NewPostForm(props) {
        _classCallCheck(this, NewPostForm);

        //set initial state of this component
        var _this = _possibleConstructorReturn(this, (NewPostForm.__proto__ || Object.getPrototypeOf(NewPostForm)).call(this, props));

        _this.state = {
            new_post_text: '' //default value - empty string
        };
        return _this;
    }

    _createClass(NewPostForm, [{
        key: 'formSubmitted',
        value: function formSubmitted(event) {
            var _this2 = this;

            event.preventDefault(); //stop the form from actually being submitted
            // console.log('Form is being submitted');

            _jquery2.default.ajax({
                method: 'post',
                url: 'api/create-post.php',
                data: {
                    text: this.state.new_post_text
                },
                success: function success(data) {

                    //call the newPostWasAdded function of FeedComponent
                    //which was given to this component as this.props.functionToRun
                    _this2.props.functionToRun();

                    //change the text back to an empty string
                    _this2.setState({
                        new_post_text: ''
                    });
                }
            });
        }
    }, {
        key: 'textChanged',
        value: function textChanged(event) {
            this.setState({
                new_post_text: event.target.value
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'new_post' },
                _react2.default.createElement(
                    'form',
                    { action: '', onSubmit: function onSubmit(event) {
                            return _this3.formSubmitted(event);
                        } },
                    _react2.default.createElement('textarea', { name: 'text', id: '', cols: '30', rows: '10', placeholder: 'What are you thinking about?',
                        value: this.state.new_post_text,
                        onChange: function onChange(event) {
                            return _this3.textChanged(event);
                        }
                    }),
                    _react2.default.createElement('input', { type: 'submit', value: 'add' })
                )
            );
        }
    }]);

    return NewPostForm;
}(_react2.default.Component);

exports.default = NewPostForm;

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
    _inherits(Post, _React$Component);

    function Post(props) {
        _classCallCheck(this, Post);

        return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props)); //call the constructor of React.Component
    }

    _createClass(Post, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'li',
                { className: 'post' },
                _react2.default.createElement(
                    'div',
                    { className: 'user' },
                    'You'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'time' },
                    this.props.published_at
                ),
                _react2.default.createElement(
                    'h3',
                    null,
                    ' ',
                    this.props.title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    this.props.text
                )
            );
        }
    }]);

    return Post;
}(_react2.default.Component);

exports.default = Post;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LeftMenu = function (_React$Component) {
    _inherits(LeftMenu, _React$Component);

    function LeftMenu(props) {
        _classCallCheck(this, LeftMenu);

        return _possibleConstructorReturn(this, (LeftMenu.__proto__ || Object.getPrototypeOf(LeftMenu)).call(this, props)); //call the constructor of React.Component
    }

    _createClass(LeftMenu, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'nav',
                { className: 'leftmenu' },
                _react2.default.createElement(
                    'h2',
                    null,
                    'You'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Selected posts'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Messenger'
                ),
                _react2.default.createElement(
                    'a',
                    { href: '#' },
                    'Marketplace'
                )
            );
        }
    }]);

    return LeftMenu;
}(_react2.default.Component);

exports.default = LeftMenu;

/***/ })

},[16]);