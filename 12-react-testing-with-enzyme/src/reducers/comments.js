import { SAVE_COMMENT, GET_ALL_COMMENT } from "actions/type.js";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload.comment];
    case GET_ALL_COMMENT:
      return state;
    default:
      return state;
  }
};

export default commentsReducer;
