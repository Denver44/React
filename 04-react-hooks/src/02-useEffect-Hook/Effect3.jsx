import React, { useEffect, useState } from "react";

const Effect3 = () => {
  const [resourceType, setResourceType] = useState("users");
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourcetype}`)
      .then((response) => response.json())
      .then((json) => setItem(json));
  }, [resourcetype]);

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

      {item.map((items) => {
        return <pre>{JSON.stringify(items)}</pre>;
      })}
    </>
  );
};
export default Effect3;
