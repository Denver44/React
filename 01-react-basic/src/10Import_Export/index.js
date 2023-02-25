// --------------------------------------------- IMPORT EXPORT TUTORIAL -----------------------------------------
import React from "react";
import ReactDom from "react-dom";
import cast1, { cast2, movie_name } from "./App.jsx";
// import * as que from './App.jsx';  // This is also way to import

ReactDom.render(
  <>
    <h1>{cast1}</h1>
    <h1>{cast2}</h1>
    <h1>{movie_name()}</h1>
  </>,

  document.getElementById("root")
);

// To import the non-default value we have to write in {name2}  like this and we can add as many as by putting comma in between But the name must be same as int export file otherwise we will get error.
