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



/*在jsx中，数组元素自动拼接 */

var testarr = [

    <div>数组1</div>,
    <div>数组2</div>,
    <div>数组3</div>,
    <div>数组4</div>
]

var TestArry = React.createClass({
    render() {
        return (
            <div>
                {testarr}
            </div>
        )
    }
})

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

        var checkbox = this.refs.checkbox
        console.log('checkbox', checkbox);
        console.log('checkbox dom', ReactDOM.findDOMNode(checkbox));

    },

    getInitialState() {

        return {
            value: ''
        }

    },

    clickHandler(event) {
        console.log('event', event); // => nullified object.
        console.log('event', event.type); // => "click"
        var eventType = event.type; // => "click"

        //异步函数

        setTimeout(function () {
            console.log(event.type); // => null
            console.log(eventType); // => "click"
        });

        this.setState({ clickEvent: event }); // Won't work. this.state.clickEvent will only contain null values.
        this.setState({ eventType: event.type }); // You can still export event properties.

        console.log('event', event)
        console.log('event', event.type);

        //当事件中的函数执行完之后，再去执行异步函数，异步函数执行之前，event对象指向null，除非调用event.persist()
    },

    handleChange(event) {
        this.setState({
            value: event.target.value
        })

    },
    handleChange2() {

    },

    render() {
        //驼峰式命名(有前缀的使用大驼峰，ms除外)
        var style = {
            backgroundColor: 'red',
            height: 100,
            width: 100
        }

        return (
            <div>

                <Checkbox   ref='checkbox'    />
                <div ref='name' >{this.props.name }</div>


                <div ref='children'>{this.props.children}</div>
                {/**
                    this.props的返回值可能为null，对象或者数组。可以用React.Children.map方法迭代
                 */
                }


                <button  onClick={this.clickHandler} >绑定事件</button>
                <select  onChange={this.handleChange2} value='B'>
                    <option value="A">Apple</option>
                    <option value="B">Banana</option>
                    <option value="C">Cranberry</option>
                </select>

                {/*非受控组建，defaultValue设置默认值 */}
                <input onChange={this.handleChange} type="text" defaultValue=''/>

                {/*受控组建 */}
                <input style={style} type="text" value={this.state.value}/>
            </div>


        )
    }
});

var Checkbox = React.createClass({
    handleChange(event) {
        this.setState({ check: !this.state.check });

        // 调用这个方法后，即便state中的check值发生变化，在浏览器中重新render不会有作用
        //event.preventDefault();

        //直接修改state,不会修改state的值
        // this.state.class === 'classA' ? 'classB' : 'classA';
    },
    handleClick(event) {
        // setTimeout(() => {
        this.setState({ check: !this.state.check });
        // })
        //调用这个方法后，即便state中的check值发生变化，在浏览器中重新render不会有作用
        event.preventDefault();

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
                <input onClick={this.handleClick} onChange={this.handleChange}
                    type='checkbox' className={this.state.class} checked={this.state.check} />
            </div>
        )

    }
});

//定义无状态组件
function StatelessComponent(props) {
    return (
        <div>
            <div> Hello {props.name} </div>
            <button onClick={props.onClick} >按钮</button>
        </div>

    )



}

var arr = ['a', 'b', 'c'];

var ListView = React.createClass({


    _clickHandle() {


        alert(1111111);

    },

    render() {
        /*注释的写法 */
        var s = arr.map(function (el, index) {
            return (
                <Hello key={index}  name={el}  />
            );
        });
        return (

            <div>
                <TestArry/>
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
                </World>
                <StatelessComponent   onClick={this._clickHandle}    name='yaowenzhu'/>
            </div>
        );
    }
});

ReactDOM.render(
    <ListView name='aaaaaa'/>, document.getElementById('example')
);



























