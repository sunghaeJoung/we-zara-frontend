import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main.js';
<<<<<<< HEAD
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import ListDetail from './Pages/ListDetail/ListDetail.js';
=======
import ListDetail from './Pages/ListDetail/ListDetail.js';
import Search from './Components/Search/Search.js';
>>>>>>> de54ec8fb528d1285371f0bd09ef9ffcdc68ec5a

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          {/* <Route exact path="/signUp" component={SignUp} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/product-detail" component={ProductDetail} />
=======
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/signUp" component={SignUp} /> */}
          <Route exact path="/login" component={Login} />
>>>>>>> de54ec8fb528d1285371f0bd09ef9ffcdc68ec5a
          <Route exact path="/listDetail" component={ListDetail} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
