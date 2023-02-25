//  Javascript Expression in Jsx
import React from "react";
import ReactDom from "react-dom";

// using curly braces we can use the javascript Expression in Jsx.
// we cannot use statement here like if else while like this in it.
const Name = "Denver";
ReactDom.render(
  <>
    <h1> Hello I m {Name} </h1>
    <p> My lucky number is {parseInt(100 * Math.random(100))} </p>
  </>,
  document.getElementById("root")
);
