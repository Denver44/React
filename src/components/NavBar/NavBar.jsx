import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Button />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
