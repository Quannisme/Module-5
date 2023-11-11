import React, { Component } from 'react';

class Caculator extends Component {
    constructor() {
        super();
        this.state = {
            number1:0,
            number2:0,
            result:0,
        }
    }
    changeText=(number1,name)=>{
        this.setState({
            [name]:number1
        })
    }
    handlePlus = () => {
        this.setState((prve) => {
            return{
                result:parseInt(prve.number1) + parseInt(prve.number2),
            }
        })
    }
    handleMinus = () => {
        this.setState((prve) => {
            return{
                result:parseInt(prve.number1) - parseInt(prve.number2),
            }
        })
    }
    handleMulti = () => {
        this.setState((prve) => {
            return{
                result:parseInt(prve.number1) * parseInt(prve.number2),
            }
        })
    }
    handleDivi = () => {
        this.setState((prve) => {
            return{
                result:parseInt(prve.number1) / parseInt(prve.number2),
            }
        })
    }
    render() {
        return (
            <div>
                <div className='element_input'>
                <input type="number" className='number1' value={this.state.number1} name="number1" onChange={(evt) => this.changeText(evt.target.value,'number1')}/>
                <input type="number" className='number2' value={this.state.number2} name="number2" onChange={(evt) => this.changeText(evt.target.value,'number2')}/>
                <input type="text" className="calculator-screen z-depth-1" placeholder="Result" value={this.state.result} readOnly />
                </div>
                <div className='select_button'>
                <button type="button" className="operator btn btn-info" value="+" onClick={this.handlePlus}>+</button>
                <button type="button" className="operator btn btn-info" value="-" onClick={this.handleMinus}>-</button>
                <button type="button" className="operator btn btn-info" value="*" onClick={this.handleMulti}>*</button>
                <button type="button" className="operator btn btn-info" value="/" onClick={this.handleDivi}>/</button>
                </div>
            </div>
        );
    }
}

export default Caculator;