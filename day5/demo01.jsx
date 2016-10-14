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
            <p className={ classname }>改变背景</p>
        )
    }
})

const Hello = React.createClass(
    {
        render() {
            const {onIncrease, onDecrease, value} = this.props;
            return (
                <div>
                  <p>
                    { value }
                  </p>
                  <button onClick={ onIncrease }>点击增加</button>
                  <button onClick={ onDecrease }>点击减少</button>
                  <Sub background={ value } />
                </div>
            )
        }
    }
);
const Hello2 = React.createClass(
    {
        render() {
            const {value, actions} = this.props;
            console.log('actions', actions)
            return (
                <div>
                  <p>
                    { value }
                  </p>
                  <button onClick={ actions.increaseActionCreator }>点击增加</button>
                  <button onClick={ actions.decreaseActionCreator }>点击减少</button>
                  <Sub background={ value } />
                </div>
            )
        }
    }

);
const Hello3 = React.createClass(
    {
        render() {
            const {value} = this.props;
            console.log('this.props', this.props)

            return (
                <div>
                  <p>
                    { value }
                  </p>
                  <button>点击增加</button>
                  <button>点击减少</button>
                  <Sub background={ value } />
                </div>
            )
        }
    }
);

const Provider = ReactRedux.Provider;

const {INCREASE, DECREASE} = {
    INCREASE: 'increase',
    DECREASE: 'decrease'
}

// const increase = () => {
//     store.dispatch({ type: INCREASE })
// }
// const decrease = () => {
//     store.dispatch({ type: DECREASE })
// }

function mapStateToProps(state) {
    console.log('state', state)
    return {
        value: state.value

    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrease: () => dispatch({
            type: INCREASE
        }),
        onDecrease: () => dispatch({
            type: DECREASE
        })
    }
}


function mapStateToProps2(state, ownProps) {
    console.log('state', state)
    console.log('ownProps', ownProps)
    return {
        value: state.value

    }
}


function increaseActionCreator() {
    return {
        type: INCREASE
    }

}
function decreaseActionCreator() {
    return {
        type: DECREASE
    }

}


function mapDispatchToProps2(dispatch) {
    console.log('dispatch', dispatch)
    return {
        actions: Redux.bindActionCreators({
            increaseActionCreator,
            decreaseActionCreator
        }, dispatch)
    }
}




const App = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)

//connect函数返回一个新的组件
const App2 = ReactRedux.connect(
    mapStateToProps2,
    mapDispatchToProps2
)(Hello2)




function increaseActionCreator3() {
    return {
        type: INCREASE
    }

}


function mapStateToProps3(state, ownProps) {

    return {
        value: state.value

    }
}

const App3 = ReactRedux.connect(mapStateToProps3,
    increaseActionCreator3)(Hello3)




const reducer = (state = {
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

        <Provider store={ store }>
          <div>
            <App />
            <App2 />
            <App3 />
          </div>
        </Provider>,

        document.querySelector('#app'))

}
render()
store.subscribe(render)




