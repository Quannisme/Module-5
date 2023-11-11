import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["An Sang", "The Duc"],
      item: "",
    };
  }
  changeText = (value) => {
    this.setState({
      item: value,
    });
  };
  add = () => {
    const list = this.state.list;
    list.push(this.state.item);
    this.setState({
      list: list,
      item: "",
    });
  };
  remove = (index) => {
    const newlist = this.state.list;
    newlist.splice(index, 1);
    this.setState({
      list: newlist,
      item: "",
    });
  };
  render() {
    return (
      <div>
        <div className="input">
          <form>
            <input onChange={(evt) => this.changeText(evt.target.value)} />
            <button type="button" onClick={this.add}>
              Add
            </button>
          </form>
        </div>
        <div className="list">
          {this.state.list.map((values, index) => {
            return (
              <span key={index}>
                {values}

                <button type="button" onClick={()=>this.remove(index)}>
                  X
                </button>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ToDo;
