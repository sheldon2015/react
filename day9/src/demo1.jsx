import React from 'react';
import ReactDom from 'react-dom';
import sync from './sync';

require('./common.css');
require('./index1.css');

require.ensure(['./async'], function (require) {

    // require.include('./async');

    const async = require('./async'); //commonjs模块导入

    console.log('async', async);

},'async');//第三个参数配置异步模块的文件名,可以在webpack.config中通过name引用

//const sync = require('./sync'); //commonjs模块导入
console.log('sync', sync);

const Hello = React.createClass({

    render() {

        return (
            <div>
                webpack demo using jsx demo01.
                <p>ccccccccccccc</p>
            </div>
        )
    }

})

ReactDom.render(
    <Hello/>, document.querySelector('#container1'));
