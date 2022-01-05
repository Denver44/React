import React, { useState } from 'react';
import axios from '../api/axios.js';
import Images from './Images';

function SearchBox() {
  const [inputVal, setInputVal] = useState('');
  const [images, setImages] = useState([]);

  const handleInput = (e) => setInputVal(() => e.target.value);

  const handleSubmit = () => {
    const fetchImages = async () => {
      return await axios
        .get(`/search/photos`, {
          params: { query: inputVal },
        })
        .then(({ data }) => setImages(data.results))
        .catch((e) => setImages([]));
    };
    fetchImages();
    setInputVal(() => '');
  };

  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <input type="text" value={inputVal} onChange={(e) => handleInput(e)} />
        <button onClick={() => handleSubmit()}>Submit</button>
      </div>
      <Images images={images} />
    </div>
  );
}

export default SearchBox;
