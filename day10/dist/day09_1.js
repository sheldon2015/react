webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);
	module.exports = __webpack_require__(185);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _sync = __webpack_require__(174);

	var _sync2 = _interopRequireDefault(_sync);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(175);
	var style = __webpack_require__(178);

	console.log('demo01');
	console.log('style', style);

	__webpack_require__.e/* nsure */(1, function (require) {

	    var async = __webpack_require__(179);

	    console.log('async', async);
	});

	var Hello = _react2.default.createClass({
	    displayName: 'Hello',
	    render: function render() {

	        return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	                'p',
	                { className: style.a },
	                'aa'
	            ),
	            'webpack demo using jsx demo01.',
	            _react2.default.createElement(
	                'p',
	                null,
	                'aaaaaa'
	            )
	        );
	    }
	});

	_reactDom2.default.render(_react2.default.createElement(Hello, null), document.querySelector('#container1'));

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var a = 'sync';
	__webpack_require__(175);
	__webpack_require__(176);
	__webpack_require__(176);
	// const ss=require('data');
	// console.log('data',ss.Data)


	var jQuery1111 = __webpack_require__(177);

	console.log('$', jQuery1111);

	console.log('_DEV_', (false));

	if (true) {

	    document.write(new Date());
	}

	exports.default = a;

/***/ },

/***/ 175:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 176:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 177:
/***/ function(module, exports) {

	module.exports = $;

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"a":"Vk6RE2tCeslt9h-UiZu43","define-class":"_2iEORrT_o6QVQI29x9n6H_ Vk6RE2tCeslt9h-UiZu43","defineClass":"_2iEORrT_o6QVQI29x9n6H_ Vk6RE2tCeslt9h-UiZu43"};

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(36);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(175);
	__webpack_require__(186);
	console.log('demo02');

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
	                'demo02'
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