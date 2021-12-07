import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });
    wrapped.update(); // as React state is asynchronous
  });
  it("has a text area that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  it("submit the form, then check input area is blank or not", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    wrapped.find("button").simulate("click");
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
