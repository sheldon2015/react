webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(185);


/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(178);
	__webpack_require__(186);

	var Hello = _react2.default.createClass({
	    displayName: 'Hello',
	    render: function render() {

	        return _react2.default.createElement(
	            'div',
	            null,
	            'webpack demo using jsx',
	            _react2.default.createElement(
	                'p',
	                null,
	                'ccccccccccccccccccccccc'
	            )
	        );
	    }
	});

	_reactDom2.default.render(_react2.default.createElement(Hello, null), document.querySelector('#container2'));

/***/ },

/***/ 186:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});