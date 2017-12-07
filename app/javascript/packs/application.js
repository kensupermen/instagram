import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from "./components/header"

ReactDOM.render((
  <Router>
    <Route exact path="/" component={Header}/>
  </Router>
), document.getElementById("header"));
