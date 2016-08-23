var Hello = React.createClass(
    {
        render: function () {
            return (

                <li>
                    Hello {
                        this.props.name
                    }
                </li>
            )

        }
    }
);
var World = React.createClass({
    getDefaultProps() {
        return {
            name: 'bbbbbbbbbbbbbbbbbbbb'
        }

    },
    render() {
        return (
            <div>{this.props.name }</div>
        )
    }
});

var Checkbox = React.createClass({
    handleChange() {
        this.setState({
            check: !this.state.check
        })
    },
    getInitialState() {
        return {
            check: true
        }
    },
    render() {
        /* state对象管理状态 */
        /* props对象管理 */
        console.log('render  again')
        return (
            <div>
                {/*驼峰命名*/}
                <input onChange={this.handleChange} type='checkbox' checked={this.state.check} />
            </div>
        )

    }
});


//定义无状态组件
function StatelessComponent(props) {
    return <div> Hello {props.name} </div>
}



var arr = ['a', 'b', 'c'];
var ListView = React.createClass({
    render() {
        /*注释的写法 */
        var s = arr.map(function (el, index) {
            return (
                <Hello key={index}  name={el}  />
            );
        });
        return (
            <div>
                <Checkbox/>
                <div>{this.props.name}</div>
                <ul>
                    { s }
                </ul >
                <World/>
                <StatelessComponent  name='yaowenzhu'/>
            </div>
        );
    }
});
ReactDOM.render(
    <ListView  name='aaaaaa'/>, document.getElementById('example')
);



























