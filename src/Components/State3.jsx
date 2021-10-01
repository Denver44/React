import React, { useState } from "react";

// It will render always thats why we used function inside a state.
// const func = () => {
//   console.log("It Run everyTime");
//   return 5;
// };

const State3 = () => {
  // const [count, setCount] = useState(func());

  // At time of complex computation use below method its safe.
  // Use this when we have to do complex computation always pass inside a function as it only run for one time and don't make your process slow.

  const [count, setCount] = useState(() => {
    console.log("Runs only Once"); // it will run for only once
    return 5;
  });

  const mul = () => {
    setCount((pre) => pre * 2);
  };

  const div = () => {
    setCount((pre) => pre / 2);
  };

  return (
    <>
      <button onClick={div}> /2 </button>
      <span>{count}</span> <button onClick={mul}> X2 </button>
    </>
  );
};

export default State3;
