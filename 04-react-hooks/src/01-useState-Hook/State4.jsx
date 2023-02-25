import React, { useState } from "react";

// Passing an object in UseState.
// we have to use SpreadOperator to keep whatever it was as it is and then set the newValue.
const State4 = () => {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  // The below are Destructing it as we have to show the count the theme Below thats why we used this.
  const increment = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: "blue",
      };
    });
  };
  const decrement = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
        theme: "green",
      };
    });
  };

  return (
    <>
      <div>
        <button onClick={decrement}>- </button>
        <span>{count}</span> <span>{theme}</span>{" "}
        <button onClick={increment}>+ </button>
      </div>
    </>
  );
};

export default State4;
