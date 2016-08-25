var Button = React.createClass({

    getInitialState() {

        return {
            class: 'classA'
        }
    },
    _clickHandle(event) {

        this.setState({
            class: 'classB'
        })

    },
    render() {
        return (
            <div>
                <input className={this.state.class}   onClick={this._clickHandle}   type="button"  value='button'  />
            </div>
        )
    }
})



ReactDOM.render(<Button/>, document.querySelector('#example'));