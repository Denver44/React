import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/type";

describe("saveComment", () => {
  it("has the correct type", () => {
    const actionState = saveComment();
    expect(actionState.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = {
      type: SAVE_COMMENT,
      payload: {
        comment: "New Comment",
      },
    };

    const actionState = saveComment(action.payload.comment);
    expect(actionState).toEqual(action);
  });
});
