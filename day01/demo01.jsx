var Hello = React.createClass(
    {
        render: function () {

            return (
                <li>
                    Hello {
                        this.props.name
                    }

                </li>
            );
        }
    }
);

var arr = ['a', 'b', 'c'];

var ListView = React.createClass({
    render() {
        /*注释的写法 */

        var s = arr.map(function (el, index) {
            return (
                <Hello key={index}  name={el}  />
            )
        });
        return (
            <ul>
                {s}
            </ul>
        );
    }
})
ReactDOM.render(

    <ListView  name='aaaaaa'/>, document.getElementById('example')
);



























