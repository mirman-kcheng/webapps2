import React from "react";

export default class NameField extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    name: ""
  }
}

changeHandler(e) {
  this.setState({
    name: e.target.value //get value from form field
  })
}

render() {
  return (
    <input type="text"
    value={this.state.name}
    onChange={this.changeHandler.bind(this)}/> //initial value lets you change what's in the textbox
  )
}

}
