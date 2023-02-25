import axios from "api/axios";
import { SAVE_COMMENT, FETCH_COMMENTS } from "./type";

const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: {
      comment,
    },
  };
};
const fetchComment = () => {
  const res = axios.get("/comments");

  return {
    type: FETCH_COMMENTS,
    payload: res,
  };
};

export { saveComment, fetchComment };
