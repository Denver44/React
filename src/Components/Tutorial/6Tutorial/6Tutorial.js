// ----------------------06 Javascript Expression in Jsx --------------------------
import React from "react";
import ReactDom from "react-dom";

// using curly barces we can use the javscript Expression in Jsx.
// we cannot use statement here like if else while like this in it.
const flname = "Durgesh Avan rai";
ReactDom.render(
  <>
    <h1> Hello I m {flname} </h1>
    <p> My lucky number is {parseInt(100 * Math.random(100))} </p>
  </>,
  document.getElementById("root")
);
