import React from "react";
import { mount } from "enzyme";
import CommentList from "components/CommentList";
import RootProvider from "RootProvider";

let wrapped;
beforeEach(() => {
  const initialState = {
    comments: ["New Comment 1", "New Comment 2", "New Comment 3"],
  };
  wrapped = mount(
    <RootProvider initialState={initialState}>
      <CommentList />
    </RootProvider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(3);
});
it("shows the text for each  comment", () => {
  expect(wrapped.render().text()).toContain("New Comment 1");
  expect(wrapped.render().text()).toContain("New Comment 2");
  expect(wrapped.render().text()).toContain("New Comment 3");
});
