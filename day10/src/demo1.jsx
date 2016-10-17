import React from 'react';
import ReactDom from 'react-dom';
import sync from './sync';

require('./common.css');
const style = require('./index1.css');

console.log('demo01')
console.log('style', style)

require.ensure(['./async'], function (require) {

    const async = require('./async');

    console.log('async', async);

}, 'async');

const Hello = React.createClass({

    render() {

        return (
            <div>
                <p className={style.a}>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                webpack demo using jsx demo01.
                <p>demo01</p>
            </div>
        )
    }

})

ReactDom.render(
    <Hello/>, document.querySelector('#container1'));
