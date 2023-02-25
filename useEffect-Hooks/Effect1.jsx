import React, { useEffect, useState } from "react";

const Effect1 = () => {
  const [num, setNum] = useState(5);
  const change = () => {
    setNum((pre) => pre + 1);
  };

  useEffect(() => {
    console.log("render");
  }, []); // As it is Empty Array so it will run for only one time.

  return <button onClick={change}>click me {num}</button>;
};
export default Effect1;
