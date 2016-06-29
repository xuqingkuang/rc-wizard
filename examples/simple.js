webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(177);


/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(39);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcWizard = __webpack_require__(169);
	
	var _rcWizard2 = _interopRequireDefault(_rcWizard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(175); // use jsx to render html, do not modify simple.html
	
	var Test = function Test() {
	  return _react2.default.createElement(
	    _rcWizard2.default,
	    { id: 'test', onDone: function onDone() {
	        alert('Wizard is done');
	      } },
	    _react2.default.createElement(
	      _rcWizard2.default.Step,
	      { key: '1' },
	      'I\'m the first page.'
	    ),
	    _react2.default.createElement(
	      _rcWizard2.default.Step,
	      { key: '2' },
	      'I\'m the second page.'
	    ),
	    _react2.default.createElement(
	      _rcWizard2.default.Step,
	      { key: '3' },
	      'I\'m the third page.'
	    )
	  );
	};
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=simple.js.map