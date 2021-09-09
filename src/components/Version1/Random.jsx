import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const fetchGif = async () => {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const { data } = await axios.get(url);
  return data.data.images.downsized_large.url;
};

const Random = () => {
  const [gif, setGif] = useState("");
  useEffect(() => {
    setGif(fetchGif());
  }, []);
  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} width="400" height="300" alt="random Gif" />
      <button onClick={() => setGif(fetchGif())}>Next</button>
    </div>
  );
};

export default Random;
