import React, { useState } from "react";
import InputBox from "./InputBox";

const MainScreen = () => {
  const [FullName, setFullName] = useState("");
  const onSubmit = (name) => setFullName(name);

  return (
    <>
      <div className="center">
        <h1 className="heading"> Hello {FullName} </h1>
        <InputBox onSubmit={onSubmit} />
      </div>
    </>
  );
};

export default MainScreen;
