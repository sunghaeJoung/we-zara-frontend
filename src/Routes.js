import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main.js";
import ListDetail from "./Pages/ListDetail/ListDetail.js";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/listDetail" component={ListDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
