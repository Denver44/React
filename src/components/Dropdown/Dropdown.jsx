import React, { useState } from "react";

const selectedDropDownStyle = {
  fontWeight: "bold",
  fontSize: "14px",
  fontFamily: "sans serif",
};

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const handleDropDown = () => setOpen((prev) => !prev);

  const renderedOptions = options.map((option) => {
    return selected.label === option.label ? null : (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(() => option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
          onClick={() => handleDropDown()}
        >
          <i className="dropdown icon" onClick={() => handleDropDown()}></i>
          <div className="header item" style={selectedDropDownStyle}>
            {selected.label}{" "}
          </div>
          <div className={`menu item ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
