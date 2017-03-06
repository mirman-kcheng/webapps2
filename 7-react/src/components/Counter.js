import React from "react";

export default class Counter extends React.Component {
  constructor(props) { //constructor function returns instance of the class, need a constructor when you have state
    super(props);//parent component
    this.state = {
      count: 0
    }
  }

  add () {
    this.setState({
      count: this.state.count+1
    })
  }

  subtract () {
    this.setState({
      count: this.state.count-1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.add.bind(this)}>+</button>
        <h3>{this.state.count}</h3>
        <button onClick={this.subtract.bind(this)}>-</button>
      </div>
    )//bind: inside of the function "this" refers to the component
  }
}

// Environments
//   all the information that any of the code you write has access to   
