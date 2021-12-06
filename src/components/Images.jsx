import React from "react";
import ImageCard from "./ImageCard";
import "./Images.css";

function Images({ images }) {
  const ImageArray = images?.map(({ description, id, urls }) => {
    return (
      <div style={{ marginTop: "10px" }} key={id}>
        <ImageCard desc={description} imgPath={urls.regular} />
      </div>
    );
  });
  return <div className="image-list">{ImageArray}</div>;
}

export default Images;
