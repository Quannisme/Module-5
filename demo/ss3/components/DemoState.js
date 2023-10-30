import {Component} from "react";

class DemoState extends Component {
    constructor() {
        super();
        this.state = {
            numberCount: 0
        }
    }

    upValue = () => {
        // this.setState({
        //         numberCount: this.state.numberCount + 1
        //     }
        // )
        // this.setState({
        //         numberCount: this.state.numberCount + 1
        //     }
        // )
        // this.setState({
        //         numberCount: this.state.numberCount + 1
        //     }
        // )
        this.setState((prev) => {
                return {
                    numberCount: prev.numberCount + 1
                }
            }
        )
        this.setState((prev) => {
                return {
                    numberCount: prev.numberCount + 1
                }
            }
        )
        this.setState((prev) => {
                return {
                    numberCount: prev.numberCount + 1
                }
            }
        )
    }

    render() {
        return (
            <>
                <p>{this.state.numberCount}</p>
                <button onClick={this.upValue}></button>
            </>
        )
    }
}

export default DemoState;
