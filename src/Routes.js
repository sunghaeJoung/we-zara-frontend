import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main.js';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import ListDetail from './Pages/ListDetail/ListDetail.js';
import Search from './Pages/Search/Search.js';
import Store from './Pages/Store/Store.js';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/signUp" component={SignUp} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/product-detail" component={ProductDetail} />
          <Route exact path="/listDetail" component={ListDetail} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route exact path="/store" component={Store} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
