webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcWizard = __webpack_require__(169);
	
	var _rcWizard2 = _interopRequireDefault(_rcWizard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // use jsx to render html, do not modify simple.html
	
	__webpack_require__(175);
	
	var Test = function (_Component) {
	  _inherits(Test, _Component);
	
	  function Test(props) {
	    _classCallCheck(this, Test);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.state = {
	      condition: true
	    };
	    return _this;
	  }
	
	  Test.prototype.changeChildren = function changeChildren() {
	    var condition = !this.state.condition;
	    this.setState({ condition: condition });
	  };
	
	  Test.prototype.renderConditionPage = function renderConditionPage() {
	    if (this.state.condition) {
	      return _react2.default.createElement(
	        _rcWizard2.default.Step,
	        { key: '2' },
	        'I am the second page.'
	      );
	    }
	  };
	
	  Test.prototype.render = function render() {
	    var _this2 = this;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: function onClick() {
	            _this2.changeChildren();
	          } },
	        'Toggle display second page.'
	      ),
	      _react2.default.createElement(
	        _rcWizard2.default,
	        { id: 'test', onDone: function onDone() {
	            alert('Wizard is done');
	          } },
	        _react2.default.createElement(
	          _rcWizard2.default.Step,
	          { key: '1' },
	          'I am the first page.'
	        ),
	        this.renderConditionPage(),
	        _react2.default.createElement(
	          _rcWizard2.default.Step,
	          { key: '3' },
	          'I am the third page.'
	        )
	      )
	    );
	  };
	
	  return Test;
	}(_react.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=condition-pages.js.map