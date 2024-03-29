import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo_admin from '../img/logo-admin.png';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
            <div className="head">
                <div className="logo">
                <img src={logo_admin} alt />
                </div>
                <a href="#" className="btn btn-danger">SUBMIT new MOVIE</a>
            </div>
            <div id="list">
                <ul className="nav flex-column">
                <li className="nav-item"><Link to="/admin/adduser" className="nav-link"><i className="fas fa-user-plus" />add new user</Link></li>
                <li className="nav-item"><Link to="/users" className="nav-link"><i className="fas fa-users" />users</Link></li>
                <li className="nav-item"><Link to="/" className="nav-link"><i className="fa fa-table" />tables</Link></li>
                <li className="nav-item"><Link to="/form" className="nav-link"><i className="fas fa-chart-line" />statistics</Link></li>
                </ul>
            </div>
        </div>
      );
  }
}

export default Sidebar;
