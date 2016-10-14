import React from 'react'
import ReactDom from 'react-dom'

require('./common.css');
require('./index2.css');

const Hello = React.createClass({

    render() {

        return (
            <div>webpack demo using jsx
                <p>ccccccccccccccccccccccc</p>
            </div>

        )
    }

})

ReactDom.render(
    <Hello/>, document.querySelector('#container2'));
