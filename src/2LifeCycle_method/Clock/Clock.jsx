import React from "react";

export default class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  componentDidUpdate() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return <h1>The time is: {this.state.time}</h1>;
  }
}
