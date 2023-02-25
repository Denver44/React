//  JSX Attributes in ReactJS
import React from "react";
import ReactDom from "react-dom";

// The HTML attributes now they are called Jsx attributes.

// 1.The only things we have to keep our eye on this.
// that the attribute is made up of two sentences then we have to write that attribute in camelCase.
// The camelCase Example:- contentEditable  this is way we have to write attributes in Jsx.

//2. For img tag we must write alt attribute also.
//3. For the img tag it doesn't have any closing tag </img> .

let name = "Denver";
let link1 = "https://source.unsplash.com/user/erondu/300x300";
let link2 = "https://source.unsplash.com/collection/190727/300x300";
let link3 = "https://source.unsplash.com/WLUHO9A_xik/300x300";

ReactDom.render(
  <>
    <h1 contentEditable>Hello Everybody I'm {name}</h1>
    <img src={link1} alt="random1" />
    <img src={link2} alt="random2" />
    <img src={link3} alt="random3" />
  </>,
  document.getElementById("root")
);
