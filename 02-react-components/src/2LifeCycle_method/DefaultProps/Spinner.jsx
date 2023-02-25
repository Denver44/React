import React from "react";

const Spinner = (props) => <div>{props.message}</div>;

Spinner.defaultProps = {
  message: "Loading....",
};

export default Spinner;
