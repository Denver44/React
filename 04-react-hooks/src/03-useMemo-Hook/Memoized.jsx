import React, { useState, useMemo, useEffect } from "react";

// Note : When We Change a State of Component in react actually it re-render the entire whole Components, thats why the slow function will be called everyTime.

const slowFunction = (num) => {
  console.log("i am Slow");
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
};

// As we Use UseMemo it uses our Memory because it store or previous data in it.
// So don't use every where where especially it not needed.

const Memoized = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  //---------------Memoized Function-----------------
  // Pass the function inside it and then list of dependencies
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
      width: "200px",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme Change");
    // Now it will not display if we change our input because we have memoized or our dark state.
    // So when ever our dark variable is changed then only the app will re render.
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
};

export default Memoized;
