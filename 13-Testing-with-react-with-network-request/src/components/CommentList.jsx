import React from "react";
import { useSelector } from "react-redux";

const ListStyle = {
  display: "block",
  margin: "5px",
  padding: "8px",
  border: "1px solid gray",
  backgroundColor: "#eef",
  fontSize: "14px",
  fontWeight: "500",
  fontFamily: "sans serif",
};

const RenderList = ({ commentList }) => {
  return commentList.map((comment, id) => {
    return (
      <li key={id} style={ListStyle}>
        {comment}
      </li>
    );
  });
};

const CommentList = () => {
  const commentList = useSelector((state) => state.comments);
  return <RenderList commentList={commentList} />;
};

export default CommentList;
