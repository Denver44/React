import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/type";

it("handles action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: {
      comment: "New Comment",
    },
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles action of Unknown type", () => {
  const newState = commentsReducer([], { type: "abcd" });
  expect(newState).toEqual([]);
});
