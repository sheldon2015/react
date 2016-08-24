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
    componentDidMount() {
        //findDomNode方法
        var el = ReactDOM.findDOMNode(this);
        console.log(el);

        //refs访问子节点
        var name = this.refs.name
        console.log(name);

        var children = this.refs.children
        console.log(children);

    },

    clickHandler() {
        alert('react  事件绑定')
    },

    handleChange() {
        alert(999999)

    },
    handleChange2() {
        alert(666666)

    },

    render() {
        //驼峰式命名
        var style = {
            backgroundColor: 'red',
            height: 100,
            width: 100
        }

        return (


            <div>
                <div ref='name' >{this.props.name }</div>
                <div ref='children'>{this.props.children}</div>
                <button  onClick={this.clickHandler} >绑定事件</button>
                <select  onChange={this.handleChange2} value='B'>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>

                {/*非受控组建，defaultValue设置默认值 */}
                <input type="text" defaultValue='zzzzzzzzzzzzzzzzzz'/>

                {/*受控组建 */}
                <input style={style}   onChange={this.handleChange}  type="text" value='zzzzzzzzzzzzzzzzzz'/>
            </div>


        )
    }
});

var Checkbox = React.createClass({
    handleChange() {
        this.setState({
            check: !this.state.check

        });

        //直接修改state,不会修改state的值
        this.state.class === 'classA' ? 'classB' : 'classA';

        console.log(this.state.class)
    },
    getInitialState() {
        return {
            check: true,
            class: 'classA'
        }
    },
    render() {
        /* state对象管理状态 */
        /* props对象管理 */
        console.log('render  again')
        return (
            <div>
                {/*驼峰命名*/}
                <input onChange={this.handleChange} type='checkbox' className={this.state.class} checked={this.state.check} />
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
                <World name='zzzzzzzzzzzzzzzzzzzzzzzzzzzzz'>
                    <div> 实验props的children属性1</div>
                    <div> 实验props的children属性2</div>
                    <div> 实验props的children属性3</div>
                    <div> 实验props的children属性4</div>
                    <Hello/>
                    <Checkbox/>

                </World>
                <StatelessComponent  name='yaowenzhu'/>
            </div>
        );
    }
});

ReactDOM.render(
    <ListView  name='aaaaaa'/>, document.getElementById('example')
);



























