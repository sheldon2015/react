import React from 'react';
import ReactDom from 'react-dom';
import sync from './sync';

require('./common.css');
require('./index1.css');

require.ensure(['./async'], function (require) {

    const async = require('./async');

    console.log('async', async);

}, 'async');

const Hello = React.createClass({

    render() {

        return (
            <div>
                webpack demo using jsx demo01.
                <p>demo01</p>
            </div>
        )
    }

})

ReactDom.render(
    <Hello/>, document.querySelector('#container1'));