import { combineReducers } from "redux";
import commentsReducer from "./comments";

export default combineReducers({
  comments: commentsReducer,
});
