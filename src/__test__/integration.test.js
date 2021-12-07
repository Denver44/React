import React from "react";
import { mount } from "enzyme";
import App from "App";
import RootProvider from "RootProvider";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <RootProvider>
      <App />
    </RootProvider>
  );
});

it("can fetch a list of comments and display them", () => {
  // Attempt to render the "entire APP"
  // Find the 'Fetch Comments' button and click it
  //   Expect to find a list of comments!
});
