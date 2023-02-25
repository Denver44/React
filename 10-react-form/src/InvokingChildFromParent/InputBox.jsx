import React, { useState } from "react";

const InputBox = (props) => {
  const [name, setName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name + " King 👑");
  };
  return (
    <>
      <div className="center">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button type="submit">Click Me 👍 </button>
        </form>
      </div>
    </>
  );
};

export default InputBox;
