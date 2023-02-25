import React, { useEffect, useState } from "react";

const Effect4 = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize"); // We should remove the listener
    };
  }, []);

  return <p>{width}</p>;
};
export default Effect4;
