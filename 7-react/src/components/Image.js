import React from "react";

export default class Image extends React.Component {

  render() {
    return (
      <img src={this.props.image} className="image"/> //the thing that is containing the instance of message
    );
  }
}
