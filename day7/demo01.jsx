const {INCREASE, DECREASE, FETCH} = {
    INCREASE: 'increase',
    DECREASE: 'decrease',
    FETCH: 'fetch'
}

const reducer = (state, action) => {
    console.log('enter');
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
        case FETCH:

            switch (action.fetch) {
                case 'fetching':
                    return {
                        ...state,
                        fetch: 'fetching'
                    }
                case 'fetch-success':
                    return {
                        ...state,
                        fetch: 'fetch-success',
                        items: action.items

                    }
                case 'fetch-failure':
                    return {
                        ...state,
                        fetch: 'fetch-failure'
                    }
                default:
                    return state;
            }

        default:
            return state;

    }
};

//第二个参数会覆盖掉reducer中的初始状态

const store = Redux.createStore(reducer, {
    value: 3,
    fetch: 'fetching',
    items: []
});

//action  creator
const decreaseActionCreator = (text) => {
    return {type: DECREASE};
}
const increaseActionCreator = (text) => {
    return {type: DECREASE};
}

const decrease = () => {
    store.dispatch(decreaseActionCreator())
};
const increase = () => {
    store.dispatch(increaseActionCreator())
};
const fetch = () => {
    console.log('fetch');
    store.dispatch({type: FETCH, fetch: 'fetching'})
    setTimeout(() => {
        store.dispatch({
            type: FETCH,
            fetch: 'fetch-success',
            items: ["A", "B", "c"]
        })

    }, 1000)
};

const Hello = React.createClass({
    render() {
        const {onIncrease, onDecrease, store, onFetch} = this.props;
        console.log(store);
        if (store.fetch == 'fetch-success') {
            var data = store.items;
            data = data.map((el, index) => {
                return <div key={index}>{el}</div>;
            })
        } else if (store.fetch == 'fetching') {
            data = 'fetching';
        }
        return (
            <div>
                {data}
                <p>
                    {store.value}
                </p>
                <button onClick={onIncrease}>点击增加</button>
                <button onClick={onDecrease}>点击减少</button>
                <button onClick={onFetch}>fetch</button>
            </div>
        )
    }
});

const render = () => {
    ReactDOM.render(
        <Hello
        store={store.getState()}
        onFetch={fetch}
        onDecrease={decrease}
        onIncrease={increase}/>, document.querySelector('#app'))
};
render();
store.subscribe(render);

// -----------------------------------------------------------------------------
// 数组的filter方法

var arr = [
    {
        "name": "apple",
        "count": 2
    }, {
        "name": "orange",
        "count": 5
    }, {
        "name": "pear",
        "count": 3
    }, {
        "name": "orange",
        "count": 16
    }
];

var newArr = arr.filter(function (item) {
    return item.name === "orange";
});

console.log("Filter results:", newArr);
// - -------------------------start

(a) => next => action => {

    return action;
};

(function (a) {

    return next => action => {
        return action;

    }
});

(function (a) {

    return function (next) {

        return action => {
            return action;
        }
    }

});
(function (a) {

    return function (next) {

        return function (action) {

            return action;
        }
    }

});

(function (a) {

    return function (next) {

        return function (action) {

            return action;

        }
    }

})(function (a) {

    return function (next) {

        return function (action) {

            return action;

        }
    }

})

//----------------------------------------------------------------------end
