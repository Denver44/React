import React, { useState } from "react";

const Form1 = () => {
  const [name, setName] = useState("");
  const [FullName, setFullName] = useState("");
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  // As we want the user click on button then we show the data thats why we have to use state again for every time we have to use state to chnage the state.
  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(name);
  };
  return (
    <>
      <div className="center">
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="heading"> Hello {FullName} </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => inputEvent(e)}
            value={name}
          />
          <button type="submit">Click Me 👍 </button>
        </form>
      </div>
    </>
  );
};

export default Form1;

// In input we have to call the onChange must
// as we take the text from the value thas why we hav to use usestae 2 times.
// first for putting value in input then in after click show to near to h1.
