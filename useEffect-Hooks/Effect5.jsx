import React, { useEffect, useState } from "react";

const Effect5 = () => {
  const [resourceType, setResourceType] = useState("users");

  // We have to unsubscribe when we fetch data from api or we put any listener we have to remove the listener
  // using return at the end we unsubscribe from the api or remove listener

  useEffect(() => {
    console.log("resource change");
    return () => {
      console.log("return from resource change");
    };
  }, [resourceType]);

  return (
    <>
      <button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        post
      </button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        comments{" "}
      </button>
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        user{" "}
      </button>

      <h1>{resourceType}</h1>
    </>
  );
};
export default Effect5;
