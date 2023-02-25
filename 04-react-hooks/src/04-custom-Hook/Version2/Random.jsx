import React from "react";
import useGif from "../Hooks/useGif.js";

function Random() {
  const { gif, fetchGif } = useGif();
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="400" height="300" alt="random Gif" />
      <button onClick={fetchGif}>Next</button>
    </div>
  );
}

export default Random;
