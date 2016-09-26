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
            <p  className={classname}>改变背景</p>
        )
    }
})

const Hello = React.createClass(
    {

        render() {
            const {onIncrease, onDecrease, value} = this.props;
            console.log('value', value)
            return (
                <div>
                    <p>{value}</p>
                    <button  onClick={onIncrease}>点击增加</button>
                    <button  onClick={onDecrease}>点击减少</button>
                    <Sub  background={value}    />
                </div>
            )
        }
    }
);

const Provider = ReactRedux.Provider;



const {INCREASE, DECREASE} = { INCREASE: 'increase', DECREASE: 'decrease' }




// const increase = () => {
//     store.dispatch({ type: INCREASE })
// }
// const decrease = () => {
//     store.dispatch({ type: DECREASE })
// }





function mapStateToProps(state) {
    console.log(state)
    return {
        value: state.value
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease: () => dispatch({ type: INCREASE }),
        onDecrease: () => dispatch({ type: DECREASE })
    }
}


const App = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)




const reducer = (
    state = {
        value: 1
    }, action) => {
    switch (action.type) {
        case INCREASE:
            return (
                {
                      ...state,
    value: state.value + 1                                
                }  
                    );
        case DECREASE:
return Object.assign({}, state, {
    value: state.value - 1
})
        default:
return state;
                
            }
    }

const store = Redux.createStore(reducer);
const render = () => {
    ReactDOM.render(

        // <Hello state={store.getState() } onDecrease={decrease} onIncrease={increase} />, 

        <Provider store={store}>
            <App />
        </Provider>,

        document.querySelector('#app'))

}
render()
store.subscribe(render)




