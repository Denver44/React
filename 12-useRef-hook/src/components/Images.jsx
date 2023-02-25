import React from 'react';
import ImageCard from './ImageCard';
import './Images.css';

function Images({ images }) {
  const ImageArray = images?.map(({ description, id, urls }) => {
    return <ImageCard desc={description} imgPath={urls.regular} />;
  });
  return <div className="image-list">{ImageArray}</div>;
}

export default Images;
