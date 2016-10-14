const Sub = React.createClass({
    render() {
        const {background} = this.props;
        let classname;
        if (background % 2 == 0) {
            classname = 'classA'
        } else {
            classname = 'classB'
        }
        return (
            <p className={classname}>改变背景</p>
        )
    }
})

const Hello = React.createClass({

    render() {
        const {onIncrease, onDecrease, value} = this.props;
        return (
            <div>
                <p>
                    {value}
                </p>
                <button onClick={onIncrease}>点击增加</button>
                <button onClick={onDecrease}>点击减少</button>
                <Sub background={value}/>
            </div>
        )
    }
});

const Provider = ReactRedux.Provider;

const {INCREASE, DECREASE} = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

function mapStateToProps(state, ownProps) {
    console.log('state', state)
    console.log('ownProps', ownProps)
    return {value: state.value}
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease: () => dispatch({type: INCREASE}),
        onDecrease: () => dispatch({type: DECREASE})
    }
}

const App = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Hello)

//connect函数返回一个新的组件

const reducer = (state = {
    value: 1
}, action) => {
    switch (action.type) {
        case INCREASE:
            return ({
                ...state,
                value: state.value + 1
            });
        case DECREASE:
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state;

    }
}

const store = Redux.createStore(reducer);
const render = () => {
    // <Hello state={store.getState()} onDecrease={decrease} onIncrease={increase}/>
    ReactDOM.render(
        <Provider store={store}>
        <div>
            <App test='wwwwww'/>
        </div>
    </Provider>, document.querySelector('#app'))

}
render()
store.subscribe(render)
// -----------------------------------------------------------------------------
// - -----------------------
var s = [
    {
        a: 1
    }, {
        b: 2
    }
]
var c = {
    c: 3
}
console.log('数组扩展', [
    ...s,
    c
])

var s = {
    a: 1,
    b: 2,
    c: 3
};
var d = {
    d: 1
};
console.log('对象扩展', {
    ...s,
    d: 1
});