import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveComment, fetchComment } from "actions/index";

function CommentBox() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();
  const handleInput = (e) => setInputVal(() => e.target.value);

  const handleSubmit = () => {
    dispatch(saveComment(inputVal));
    setInputVal(() => "");
  };

  const getComments = () => {
    dispatch(fetchComment());
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
        className="submitComment"
        style={{ margin: "5px 0px 0px 5px" }}
        onClick={() => handleSubmit()}
      >
        Submit
      </button>
      <button
        className="fetchComment"
        style={{ margin: "5px 0px 0px 5px" }}
        onClick={() => getComments()}
      >
        Fetch Comments
      </button>
    </div>
  );
}

export default CommentBox;
