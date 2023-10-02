import React, { Component } from "react";

export default class Classcomponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }
  render() {
    return <div>{this.state.count}</div>;
  }
}
