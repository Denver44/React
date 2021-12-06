import React, { useState } from "react";

function CommentBox() {
  const [inputVal, setInputVal] = useState("");

  const handleInput = (e) => setInputVal(() => e.target.value);

  const handleSubmit = () => {
    setInputVal(() => "");
  };

  return (
    <div>
      <h3 style={{ margin: "5px 0px 0px 5px" }}>Enter Your Comment</h3>
      <textarea
        style={{ display: "block", margin: "5px" }}
        type="text"
        value={inputVal}
        onChange={(e) => handleInput(e)}
        rows="4"
        cols="50"
      />
      <button
        style={{ margin: "5px 0px 0px 5px" }}
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
    </div>
  );
}

export default CommentBox;
