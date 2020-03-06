import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main.js';
// import SignUp from './Pages/SignUp/SignUp.js';
import Login from './Pages/Login/Login.js';
import Search from './Pages/Search/Search.js';
import Store from './Pages/Store/Store.js';
import ListDetailNew from './Pages/ListDetailNew/ListDetailNew.js';
import ListDetail from './Pages/ListDetail/ListDetail.js';
import ProductDetail from './Pages/ProductDetail/ProductDetail.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/signUp" component={SignUp} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/list-new" component={ListDetailNew} />
          <Route exact path="/list" component={ListDetail} />
          <Route exact path="/product-detail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
