import React from "react";
import "./App.css";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,

    };
  }

  render() {
    return (

      <div>
        <p >Counter {this.state.counter}</p>
        <button onClick={() => (this.state.counter < 25) ? this.setState({ counter: this.state.counter + 1 }) : ""} > increment</button>
        <button onClick={() => (this.state.counter > 0) ? this.setState({ counter: this.state.counter - 1 }) : ""} > decrement</button>
        <button onClick={() => this.setState({ counter: 0 })} >Reset </button>
      </div>
    );
  }
}
