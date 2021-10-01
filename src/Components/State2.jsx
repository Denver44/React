import React, { useState } from "react";

// Correct way to update the value of the state. use this function version which is much better and reliable.

const State2 = () => {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount((pre) => pre + 1);
    setCount((pre) => pre + 1);
  };

  const decrement = () => {
    setCount((pre) => pre - 1);
  };

  return (
    <>
      <button onClick={decrement}> - </button>
      <span>{count}</span> <button onClick={increment}> + </button>
    </>
  );
};

export default State2;
