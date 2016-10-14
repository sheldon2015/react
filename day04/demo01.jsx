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
    // getInitial() {
    // //不需要这个来初始化state，state统一由store管理，这里设置的state，当store发出action时，不会触发更新 },

    render() {
        const {onIncrease, onDecrease, state} = this.props;
        return (
            <div>
                <p>{state.value}</p>
                <button onClick={onIncrease}>点击增加</button>
                <button onClick={onDecrease}>点击减少</button>
                <Sub background={state.value}/>
            </div>

        )

    }
});

const {INCREASE, DECREASE} = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

const increase = () => {
    store.dispatch({type: INCREASE})
    // render()
}
const decrease = () => {
    store.dispatch({type: DECREASE})
    // render()
}

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
            return Object.assign({}, state, {
                value: state.value - 1
            })
        default:
            return {
                ...state
            };
    }
}

const store = Redux.createStore(reducer);

const render = () => {

    ReactDOM.render(
        <Hello state={store.getState()} onDecrease={decrease} onIncrease={increase}/>, document.querySelector('#app'))

}

render()

store.subscribe(render)
