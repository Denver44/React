import React, { useState } from "react";

const Form4 = () => {
  //Hooks
  const [Details, setDetails] = useState({
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
        ...prev, // spread Operators  so the old value will be as same as it was
        [name]: value,  // only new value get updated.
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

export default Form4;

// In input we have to call the onChange must
