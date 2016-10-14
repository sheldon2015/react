webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _sync = __webpack_require__(173);

	var _sync2 = _interopRequireDefault(_sync);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(178);
	__webpack_require__(180);

	__webpack_require__.e/* nsure */(1, function (require) {

	    // require.include('./async');

	    var async = __webpack_require__(182); //commonjs模块导入

	    console.log('async', async);
	}); //第三个参数配置异步模块的文件名,可以在webpack.config中通过name引用

	//const sync = require('./sync'); //commonjs模块导入
	console.log('sync', _sync2.default);

	var Hello = _react2.default.createClass({
	    displayName: 'Hello',
	    render: function render() {

	        return _react2.default.createElement(
	            'div',
	            null,
	            'webpack demo using jsx demo01.',
	            _react2.default.createElement(
	                'p',
	                null,
	                'ccccccccccccc'
	            )
	        );
	    }
	});

	_reactDom2.default.render(_react2.default.createElement(Hello, null), document.querySelector('#container1'));

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var a = 12233;

	__webpack_require__(174);
	exports.default = a;

	//  exports.a=1;

/***/ },

/***/ 174:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 180:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});