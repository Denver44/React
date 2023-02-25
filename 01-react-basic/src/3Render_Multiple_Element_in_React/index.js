// To Render Multiple Elements inside ReactDOM.render()
// The render element can only render one element only.

import React from "react";
import ReactDOM from "react-dom";

//  1st way
//To solve this problem we use a div tag and inside that div tag we can put as many element we want without using comma to separate element.

ReactDOM.render(
  <div>
    <h1> Denver!! </h1>
    <p>Gangster Paradise</p>
  </div>,
  document.getElementById("root")
);

//  2nd way
// We can also make an array like we do let arr = ["denver","tokyo"]
// but we have to separate element by comma (Comma is MUST)

ReactDOM.render(
  [
    <h1> Avan Rai!! </h1>,
    <h2>Geeta rai </h2>,
    <h3>Priya rai</h3>,
    <h4> Pooja Rai </h4>,
    <h5>Durgesh rai</h5>,
  ],
  document.getElementById("root")
);
