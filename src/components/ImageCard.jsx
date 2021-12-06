import React, { useState, useEffect, useRef } from "react";

const ImageCard = ({ desc, imgPath }) => {
  const [span, setSpan] = useState(0);
  const imageRef = useRef();
  useEffect(() => {
    imageRef.current.addEventListener("load", setSpans);
  }, [imageRef]);
  const setSpans = () => {
    const height = imageRef.current.clientHeight;
    setSpan(Math.ceil(height / 10));
  };
  return (
    <div style={{ gridRowEnd: `span ${span}` }}>
      <img ref={imageRef} alt={desc} src={imgPath} />
    </div>
  );
};

export default ImageCard;
