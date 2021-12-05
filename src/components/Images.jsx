import React from "react";
import "./Images.css";

function Images({ images }) {
  const ImageArray = images?.map(({ description, id, urls }) => {
    return (
      <div style={{ marginTop: "10px" }} key={id}>
        <img alt={description} src={urls.regular} />
      </div>
    );
  });
  return <div className="image-list">{ImageArray}</div>;
}

export default Images;
