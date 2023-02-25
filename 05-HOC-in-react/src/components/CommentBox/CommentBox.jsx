import React, { useState } from "react";
import requireAuth from "../../HOC/requireAuth";
import Header from "../NavBar/NavBar";

const CommentBox = () => {
  const [currentMood, setCurrentMood] = useState("ANGRY 😠");
  const changeYourMood = () => {
    currentMood === "ANGRY 😠"
      ? setCurrentMood("Happy 😃")
      : setCurrentMood("ANGRY 😠");
  };
  return (
    <>
      <Header />
      <h2>Comment Box</h2>;
      <button onClick={changeYourMood}>{currentMood}</button>
    </>
  );
};

export default requireAuth(CommentBox);
