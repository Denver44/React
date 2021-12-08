import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Accordion
      </Link>
      <Link to="/search" className="item">
        Search
      </Link>
      <Link to="/dropdown" className="item">
        Dropdown
      </Link>
      <Link to="/advancedSearch" className="item">
        Advanced Search
      </Link>
      <Link to="/clock" className="item">
        Clock
      </Link>
    </div>
  );
};

export default Header;
