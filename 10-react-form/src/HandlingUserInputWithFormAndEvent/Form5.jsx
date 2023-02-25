import React, { useState } from "react";
// In this as we sub,it then only values will displayed
const Form5 = () => {
  //Hooks
  const [Details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
  });

  const [Details2, setDetails2] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setDetails((prev) => {
      console.log(prev);
      return {
        ...prev, // spread Operators
        [name]: value,
        // name: value,  if we dont use the [] for name then it will create a key name of name and added the value but we want the [name] key whose name is fname or lname put the value in it that why we used []
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setDetails2(Details);
  };
  return (
    <>
      <div className="center">
        <form onSubmit={onSubmit}>
          <h1 className="heading">
            Hello {Details2.fname} {Details2.lname}
          </h1>
          <p>{Details2.email}</p>
          <p>{Details2.mob}</p>
          <input
            type="text"
            placeholder="Enter Your FirstName"
            onChange={inputEvent}
            value={Details.fname}
            name="fname"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Your LastName"
            onChange={inputEvent}
            value={Details.lname}
            name="lname"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            onChange={inputEvent}
            value={Details.email}
            name="email"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            onChange={inputEvent}
            value={Details.mob}
            name="mob"
            autoComplete="off"
          />
          <button type="submit">Click Me 👍 </button>
        </form>
      </div>
    </>
  );
};

export default Form5;

// In input we have to call the onChange must
