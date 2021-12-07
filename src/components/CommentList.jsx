import React from "react";
import { useSelector } from "react-redux";

function CommentList() {
  const commentList = useSelector((state) => state.comments);

  return (
    <ul>
      {commentList.map((comment, id) => {
        return (
          <li
            key={id}
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
            {comment}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
