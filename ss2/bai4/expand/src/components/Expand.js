import React, { Component } from 'react';

class Expand extends Component {
    constructor(props){
        super(props);
        this.state ={
            isExpand:false,
        }
    }
    open = () => {
        this.setState({
            isExpand:true,
        })
    }
    render() {
        const{isExpand}=this.state
        if(isExpand==false){
            return(
                <>
                    <button onClick={this.open}>open</button>
                </>
            );
        }
        return (
            <div>
                Trong Reactttttttttttttttttttt
            </div>
        );
    }
}

export default Expand;