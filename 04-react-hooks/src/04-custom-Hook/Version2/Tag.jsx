import React, { useState } from "react";
import useGif from "../Hooks/useGif.js";

function Tag() {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);
  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} width="400" height="300" alt="random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}>Next</button>
    </div>
  );
}

export default Tag;
