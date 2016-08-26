
var nameArry = ['a', 'b', 'c', 'd'];


var Button = React.createClass({

    getInitialState() {
        return {
            class: 'classA',
            name: nameArry
        }
    },
    _clickHandle(event) {


        nameArry.push('zzzz')

        this.setState({
            name: nameArry
        })

        // this.forceUpdate()

    },
    render() {

        var name = this.state.name;

        var temp = name.map((el, index, arr) => {
            return <li key={index}>{el}</li>
        })

        return (
            <div>
                <input className={this.state.class}   onClick={this._clickHandle}   type="button"  value='button'/>
                <ul>
                    {temp}
                </ul>

            </div>
        )
    }
})



ReactDOM.render(<Button/>, document.querySelector('#example'));