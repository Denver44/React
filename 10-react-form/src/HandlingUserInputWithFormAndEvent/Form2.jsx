import React, { useState } from "react";

const Form2 = () => {
  const [name, setName] = useState("");
  const [pass, setpass] = useState("");

  // After submit button we have to chnage the state for that this usestae we used this.
  const [FullName, setFullName] = useState("");
  const [Password, setPassword] = useState("");
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEvent2 = (event) => {
    console.log(event.target.value);
    setpass(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setFullName(name);
    setPassword(pass);
  };
  return (
    <>
      <div className="center">
        <form onSubmit={onSubmit}>
          <h1 className="heading"> Hello {FullName} {Password} </h1>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={inputEvent}
            value={name}
          />
          <input
            type="text"
            placeholder="Enter Your Password"
            onChange={inputEvent2}
            value={pass}
          />
          <button type="submit">Click Me 👍 </button>
        </form>
      </div>
    </>
  );
};

export default Form2;

// In input we have to call the onChange must
