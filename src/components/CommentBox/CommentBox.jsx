import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Header from "../NavBar/NavBar";

const CommentBox = () => {
  const authState = useSelector((state) => state.auth);
  const history = useHistory();
  useEffect(() => {
    if (!authState) {
      history.replace("/");
    }
  }, [authState, history]);

  return (
    <>
      <Header />
      <h2>Comment Box</h2>;
    </>
  );
};

export default CommentBox;
