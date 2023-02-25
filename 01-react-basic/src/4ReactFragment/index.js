//Understanding React Fragment in React JS

import React from "react";
import ReactDOM from "react-dom";

// As here we write div which will create a div inside our main div  id=root
// so that create aPROBLEM at time of flexBox so to resolve, this we used React.fragment and no need to use then array and comma .

// -----------------------1st way-------------------
ReactDOM.render(
  <React.Fragment>
    <h1> Denver </h1>
    <p> Gangster Paradise </p>
  </React.Fragment>,
  document.getElementById("root")
);

//  2nd way without writing React.fragment keyword
// NO need of comma to separate element
ReactDOM.render(
  <>
    <h1> Denver </h1>
    <p> Gangster Paradise </p>
  </>,
  document.getElementById("root")
);
