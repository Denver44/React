import { SAVE_COMMENT } from "actions/type.js";

const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload.comment];
    default:
      return state;
  }
};

export default commentsReducer;
