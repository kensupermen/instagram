import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Posts from "./components/posts"

ReactDOM.render((
  <Router>
    <Route exact path="/" component={Posts}/>
  </Router>
), document.getElementById("root"));

