import React from "react";
import Spinner from "./DefaultProps/Spinner";
import SeasonDisplay from "./PassingPropsInLifeCycle/SeasonDisplay";

export default class LifeCycleMethod extends React.Component {
  // constructor(props) {
  //   super(props); // We have to class this and pass props

  //   this.state = { lat: null };
  //   this.state = { long: null };
  //   this.state = { error: "" };
  // }

  // Alternate Method to Initialize state.

  state = { lat: null, long: null, error: "" };

  componentDidMount() {
    // console.log("I am called at time of Mount");
    // We call this function when we want to Set Some State at the first time of render a component.

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
      },
      (error) => {
        this.setState({ error: error.message });
      }
    );
  }

  componentDidUpdate() {
    console.log("I am called at time of Update");
    //whenever we to change or update the state we will call this function and it will call the render method again..
  }

  componentWillUnmount() {
    console.log("I am called at that time when the component get unmount");
    //For cleanupProcess
  }

  render() {
    return (
      <>
        {this.state.error !== "" ? (
          <div>Error: {this.state.error}</div>
        ) : (
          <div>
            {this.state.lat === null || this.state.long === null ? (
              <Spinner message="Please Allow to access your location" />
            ) : (
              <div>
                <div>Latitude: {this.state.lat} </div>
                <div>longitude: {this.state.long} </div>
              </div>
            )}
          </div>
        )}
        <br />
        <br />
        <SeasonDisplay lat={this.state.lat} />
      </>
    );
  }
}
