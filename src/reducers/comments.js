import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/type.js";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload.comment];
    case FETCH_COMMENTS:
      const newComments = action.payload.data.map((cmt) => cmt.name);
      return [...state, ...newComments];
    default:
      return state;
  }
};

export default commentsReducer;
