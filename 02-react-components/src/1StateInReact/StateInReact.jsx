import React from "react";

export default class StateInReact extends React.Component {
  constructor(props) {
    super(props); // We have to class this and pass props

    this.state = { lat: null };
    this.state = { long: null };
    this.state = { error: "" };

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
  render() {
    return (
      <>
        {this.state.error !== "" ? (
          <div>Error: {this.state.error}</div>
        ) : (
          <div>
            <div>Latitude: {this.state.lat} </div>
            <div>longitude: {this.state.long} </div>
          </div>
        )}
      </>
    );
  }
}

// State must be initialized when a components is created.
// State can only be updated using the function setState.
// Constructor function is very first function called when instance of class is created so initialize our state .
// Defining constructor is optional used when we have to define our state.
// Never write code in render method which make request.
// if we have to use state we have to assign like this.state not this.myState.
