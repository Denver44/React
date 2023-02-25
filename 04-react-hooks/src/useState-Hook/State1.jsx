import React, { useState } from "react";

// Important = This is not a good way to update the value as if we call more than setCount it will only act for one thats why we don't use this method. see tut 2.

const State1 = () => {
  const [count, setCount] = useState(5);
  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
    setCount(count + 1); 
    // Important both only work for one time the latest will work but the value will be changed for on time only not two times to as here count is 5 for both times thats why it work for ont time but if we take preCount then we get diff result.
  };

  return (
    <>
      <button onClick={decrement}> - </button>
      <span>{count}</span> <button onClick={increment}> + </button>
    </>
  );
};

export default State1;

