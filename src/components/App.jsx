import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommentList from "./CommentList/CommentList";
import CommentBox from "./CommentBox/CommentBox";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </Switch>
    </Router>
  );
}
