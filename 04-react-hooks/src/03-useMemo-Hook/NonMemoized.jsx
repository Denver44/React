import React, { useState, useEffect } from "react";

// Note : When we Change a State of Component in react actually it re-render the entire whole Components, thats why the slow function will be called everyTime.

function slowFunction(num) {
  console.log("i am Slow");
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
}

function NonMemoized() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const doubleNumber = slowFunction(number);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
    width: "200px",
  };

  useEffect(() => {
    console.log("theme Change");
  }, [themeStyles]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        change Theme
      </button>
      <div style={themeStyles}> {doubleNumber}</div>
    </div>
  );
}

export default NonMemoized;
