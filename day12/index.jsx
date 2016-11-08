var Hello = React.createClass({

    render: function () {
        return <div>
            11111111111</div>

    }
});
var Hello2 = React.createClass({

    render: function () {
        return <div>
            22222222222222</div>

    }
});

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0
        };
    }

    tick() {
        this.setState((prevState, arg2, arg3) => {

            return {
                secondsElapsed: prevState.secondsElapsed + 1
            }
        });
    }

    clickHandle(e) {

        console.log('enter', this)

    }

    getHtml() {
        let s = `<div>
                        <div>aaaaaaaaaaaaaaaaaaaaaaaa</div>
                        <script>
                        function a(){
                            alert(1);
                        }
                        </script>
                   </div>`

        if (this.state.secondsElapsed % 2 == 0) {
            s = 'empty'
        }

        return {__html: s}
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        let S = Hello;

        if (this.state.secondsElapsed % 2 == 0) {
            S = Hello2
        }

        return (

            <div>
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>

                <div dangerouslySetInnerHTML={this.getHtml()}></div>

                <a
                    href="javascript:void(0)"
                    onClick={this
                    .clickHandle
                    .bind(this)}>click
                </a>
                <S/>

            </div>
        );
    }
}

ReactDOM.render(
    <Timer/>, document.querySelector('#mount'))