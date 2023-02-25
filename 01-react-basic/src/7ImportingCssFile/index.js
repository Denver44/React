//  CSS Styling & Importing CSS Files in React JS
import React from "react";
import ReactDom from "react-dom";
import "./index.css"; // This way we import Css file in our index.js

// To Import Css file we have to write import then 'relative path of the css file'
// In place of class attribute we have to write className, because class is reserve keyword.
// To import Google Fonts we have to import the link in the index.html and use that as we use  in css non change.

let name = "Denver";
let link1 = "https://source.unsplash.com/user/erondu/300x300";
let link2 = "https://source.unsplash.com/collection/190727/300x300";
let link3 = "https://source.unsplash.com/WLUHO9A_xik/300x300";

ReactDom.render(
  <>
    <h1 className="heading">Hello Everybody I'm {name}</h1>
    <div className="img_div">
      <img src={link1} alt="random" />
      <img src={link2} alt="random" />
      <img src={link3} alt="random" />
    </div>
  </>,
  document.getElementById("root")
);
