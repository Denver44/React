import React, { useState } from "react";
// Note:- The reason we use callback function as this time we have to return object so using a callback function we return the object.
// if we want to use the previous state value then we have to use callback function.
const Form3 = () => {
  // In useState we can pass a object.
  const [Details, setDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    mob: "",
  });

  const inputEvent = (event) => {
    // const value = event.target.value;
    // const name = event.target.name;

    //----------- Object Destructing  NEW WAY -------------
    const { name, value } = event.target;

    // in setDetails there is Parameter which store the last values in it.
    // isn setDetails we have use callback function
    setDetails((prev) => {
      console.log(prev);
      if (name === "fname")
        return {
          fname: value, // we only want to change the fname
          lname: prev.lname, // rest of value must be same as previous version that why we used the callback function.
          email: prev.email,
          mob: prev.mob,
        };
      else if (name === "lname")
        return {
          fname: prev.fname,
          lname: value,
          email: prev.email,
          mob: prev.mob,
        };
      else if (name === "mail")
        return {
          fname: prev.fname,
          lname: prev.lname,
          email: value,
          mob: prev.mob,
        };
      else if (name === "mob")
        return {
          fname: prev.fname,
          lname: prev.lname,
          email: prev.email,
          mob: value,
        };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Done");
  };
  return (
    <>
      <div className="center">
        <form onSubmit={onSubmit}>
          <h1 className="heading">
            Hello {Details.fname} {Details.lname}
          </h1>
          <p>{Details.email}</p>
          <p>{Details.mob}</p>
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
            name="mail"
            autoComplete="off"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            onChange={inputEvent}
            value={Details.numbers}
            name="mob"
            autoComplete="off"
          />
          <button type="submit">Click Me 👍 </button>
        </form>
      </div>
    </>
  );
};

export default Form3;

// In input we have to call the onChange must
