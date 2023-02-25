import React from "react";
import { mount } from "enzyme";
import App from "App";
import RootProvider from "RootProvider";
import moxios from "moxios";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <RootProvider>
      <App />
    </RootProvider>
  );
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }],
  });
});

afterEach(() => {
  moxios.uninstall();
  wrapped.unmount();
});

it("can fetch a list of comments and display them", (done) => {
  // Attempt to render the "entire APP"
  // Find the 'Fetch Comments' button and click it

  wrapped.find(".fetchComment").simulate("click");
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    done();
  });
  //   Expect to find a list of comments!
});
