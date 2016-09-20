var Test = React.createClass({

    // 组件创建的时候，就会调用getDefaultProps，并且会缓存返回的结果，
    // 保证实例化时即便没有传入属性值，props也可以有默认的值
    mixins: [
        {
            componentWillMount() {
                console.log('componentWillMount  mixins')
            },
            componentDidMount() {
                console.log('componentDidMount mixins')
            }
        }
    ],
    getDefaultProps() {
        console.log('props')
        return {
            name: 'hy'
        }
    },

    getInitialState() {
        console.log('state')
        return {
            name: 'ywz'
        }
    },
    componentWillMount() {
        //render调用之前，可以在这修改组建的状态
        console.log('componentWillMount')
        console.log(this.setState({ name: '11111' }))
    },
    componentDidMount() {
        //render之后调用
        console.log('componentDidMount')
    },
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps')
    },
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
    },
    componentWillUpdate() {
        console.log('componentWillUpdate')
    },
    componentDidUpdate() {
        console.log('componentDidUpdate')
    },
    componentWillUnmount() {
        console.log('componentWillUnmount')
    },
    render() {
        return (
            <div className="wrap">
                <p>test lifecycle</p>
                <p> {this.props.name}</p>
            </div>
        )
    }
})
console.log('-------')
ReactDOM.render(<Test  name='aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'   />, document.querySelector('#example'));