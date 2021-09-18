import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [userStatus, setUerStatus] = useState("Sign In");

  const handleUser = () => {
    userStatus === "Sign In"
      ? setUerStatus(() => "Sign Out")
      : setUerStatus(() => "Sign In");
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>
          <button onClick={() => handleUser()}>{userStatus}</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
