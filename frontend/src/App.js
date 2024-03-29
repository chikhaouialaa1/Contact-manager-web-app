import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Form from './Component/Form';
import Table from './Component/Table';
import Cart from './Component/Cart';
import Login from './Component/Login';
import Singup from './Component/signup/Singup';
import Home from './Component/Home'
import Users from './Component/Users'



class App extends Component {
  render() {
    return (
        <div>
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Table} />
          <Route path="/form" component={Form} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin/adduser" component={Singup} />
          <Route path="/singup" component={Singup} />
          <Route path="/home" component={Home} />
          <Route path="/users" component={Users} />
        </div>
    );
  }
}

export default App;
