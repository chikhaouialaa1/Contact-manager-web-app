
  import React, { Component } from 'react';
  import { Redirect } from 'react-router-dom';
  import axios from 'axios';
  import Cookies from 'universal-cookie';
  import { Link } from 'react-router-dom';

  
  const cookies = new Cookies();
  
  class Header extends Component {
    constructor(){
      super();
  
      this.state ={
          login: false,
          badpassword : false
      };
    }
    render() {
      if (this.state.login === true) {
        return <Redirect to='/' />
      }
      
  
      return (
          <section>
         
          <header class="section footer-classic context-dark bg-image" >
          <div class="container">
                <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><a href="#bootstrap"></a></svg>
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/home" className="nav-link">Home</Link></li>
                    <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
                    <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
                </ul>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2"><Link to="/login" className="nav-link">Login</Link></button>
                    <button type="button" class="btn btn-outline-primary me-2"><Link to="/singup" className="nav-link">Sign-up</Link></button>
                </div>


             </header>
        </div>
          </header>
          </section>
        );
    }
  }
  
  export default Header;
  
  /*
<div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Features</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Pricing</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">FAQs</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  </div>
  */