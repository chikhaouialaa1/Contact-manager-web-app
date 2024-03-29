import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import lo from 'universal-cookie';

import Footer from "./Footer"
import Header from "./Header"


const cookies = new Cookies();

class Login extends Component {
  constructor(){
    super();

    this.state ={
        login: false,
        badpassword : false
    };
  }

  componentWillMount(){
    let jwtToken = cookies.get('jwtToken');

    if (jwtToken !== undefined){
      this.setState({
        login: true
      })
    }
  }

  post(refs){
    var self = this;
    axios.post('http://localhost:4000/login/admin', {
        email: refs.username.value,
        password: refs.password.value
    }).then(function(response){
      console.log(response)
      if (response.status===200 && response.data != undefined){
        cookies.set('jwtToken', response.data, { path: '/' });
        self.setState({
          login: true
        })
      }
    }).catch(function(err){
      self.setState({
        badpassword: true
      })

        console.log(err);
    });
  }

  render() {
    if (this.state.login === true) {
      return <Redirect to='/' />
    }

    return (
        <section>
          <Header />
        <div className>
          <section className="login-form py-md-5 py-3">
            <div className="card card_border p-md-4">
              <div className="card-body">
                <form action="#">
                  <div className="login__header text-center mb-lg-5 mb-4">
                    <h3 className="login__title mb-2">Login</h3>
                    <p>Welcome back, login to continue</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="input__label">Username</label>
                    <input type="text" className="form-control login_text_field_bg input-style" id="exampleInputEmail1" ref="username" aria-describedby="emailHelp" placeholder required autofocus />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="input__label">Password</label>
                    <input type="password" className="form-control login_text_field_bg input-style" id="exampleInputPassword1" ref="password" placeholder required />
                  </div>
                  {
                  this.state.badpassword &&
                  <div class="alert alert-danger" role="alert">
                      Invalid email or password
                  </div>                  
                  }
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <input type="button" onClick={() => this.post(this.refs)} value="Login now" className="btn btn-primary btn-style mt-4" />
                  </div>
                  <>
                  </>
                </form>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </section>
      );
  }
}

export default Login;
