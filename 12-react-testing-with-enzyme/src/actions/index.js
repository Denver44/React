import { SAVE_COMMENT, GET_ALL_COMMENT } from "./type";

const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: {
      comment,
    },
  };
};
const getAllComment = () => {
  return {
    type: GET_ALL_COMMENT,
  };
};

export { saveComment, getAllComment };
