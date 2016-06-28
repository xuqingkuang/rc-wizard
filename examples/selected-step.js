webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _rcWizard = __webpack_require__(2);
	
	var _rcWizard2 = _interopRequireDefault(_rcWizard);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(46);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Test = function Test() {
	  return _react2.default.createElement(
	    _rcWizard2.default,
	    {
	      id: 'selected-step-test',
	      onDone: function onDone() {
	        alert('Wizard is done');
	      },
	      displayKey: '2'
	    },
	    _react2.default.createElement(
	      _rcWizard2.default.Step,
	      { key: '1' },
	      'I\'m the first page.'
	    ),
	    _react2.default.createElement(
	      _rcWizard2.default.Step,
	      { key: '2' },
	      'I\'m the default displaying second page.'
	    ),
	    _react2.default.createElement(
	      _rcWizard2.default.Step,
	      { key: '3' },
	      'I\'m the third page.'
	    )
	  );
	}; // use jsx to render html, do not modify simple.html
	
	_reactDom2.default.render(_react2.default.createElement(Test, null), document.getElementById('__react-content'));

/***/ }
]);
//# sourceMappingURL=selected-step.js.map