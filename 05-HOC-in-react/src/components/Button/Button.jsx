import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAuth } from "../../actions/index";

const Button = () => {
  const [userStatus, setUerStatus] = useState("Sign In");

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleUser = () => {
    userStatus === "Sign In"
      ? dispatch(changeAuth(true))
      : dispatch(changeAuth(false));
  };

  useEffect(() => {
    authState === true
      ? setUerStatus(() => "Sign Out")
      : setUerStatus(() => "Sign In");
  }, [authState]);

  return <button onClick={() => handleUser()}>{userStatus}</button>;
};

export default Button;
