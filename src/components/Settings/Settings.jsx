import React, { useState } from "react";
import requireAuth from "../../HOC/requireAuth";
import Header from "../NavBar/NavBar";

const Settings = () => {
  const [currentMood, setCurrentMood] = useState("ANGRY 😠");
  const changeYourMood = () => {
    currentMood === "ANGRY 😠"
      ? setCurrentMood("Happy 😃")
      : setCurrentMood("ANGRY 😠");
  };
  return (
    <>
      <Header />
      <h2>Set Your New Password Box</h2>;
      <button onClick={changeYourMood}>{currentMood}</button>
    </>
  );
};

export default requireAuth(Settings);
