import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommentList from "./components/CommentList/CommentList";
import Settings from "./components/Settings/Settings";
import CommentBox from "./components/CommentBox/CommentBox";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/post" component={CommentBox} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/" component={CommentList} />
      </Switch>
    </Router>
  );
}
