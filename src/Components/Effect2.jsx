import React, { useEffect, useState } from "react";

const Effect2 = () => {
  const [num, setNum] = useState(5);
  const change = () => {
    setNum((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("render");
  }, [num]); // This will every time called as the value of the num is changed.

  return <button onClick={change}>click me {num}</button>;
};
export default Effect2;
