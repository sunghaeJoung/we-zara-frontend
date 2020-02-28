import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signUp from "./Pages/signUp/signUp";
import Login from "./Pages/Login/Login";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signUp" component={signUp} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
