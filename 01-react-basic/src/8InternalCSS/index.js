//  CSS Styling Internal and Inline Css.
import React from "react";
import ReactDom from "react-dom";

// So this way we have to write Internal css in react js.
// Everything must in from of object in key and value pair
// The value must be in 'close like this'
// The key must be in camelCase.
// NO kebab-case that was earlier in css Only camelCase.
// In place of semi-colon use comma to separate element.

let name = "Denver";
let link1 = "https://source.unsplash.com/user/erondu/300x300";
let link2 = "https://source.unsplash.com/collection/190727/300x300";
let link3 = "https://source.unsplash.com/WLUHO9A_xik/300x300";

//  Making A object we use internal Css.
const heading = {
  margin: "50px",
  textAlign: "center",
  color: "blue",
  textTransform: "capitalize",
  fontWeight: "bold",
  fontFamily: "Kumbh Sans, sans-serif",
};

const img_div = {
  display: "flex",
  justifyContent: "center",
};

ReactDom.render(
  <>
    <h1 style={heading}>Hello Everybody I'm {name}</h1>
    <div style={img_div}>
      <img src={link1} alt="random" />
      <img src={link2} alt="random" />
      <img src={link3} alt="random" />
    </div>
  </>,
  document.getElementById("root")
);
