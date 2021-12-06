import React from "react";

function CommentList() {
  return (
    <ul>
      {Array(10)
        .fill(null)
        .map((e) => {
          return (
            <li
              style={{
                display: "block",
                margin: "5px",
                padding: "5px",
                border: "1px solid gray",
                backgroundColor: "#eef",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Hello
            </li>
          );
        })}
    </ul>
  );
}

export default CommentList;
