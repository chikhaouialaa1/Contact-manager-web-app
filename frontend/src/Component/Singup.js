import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Singup extends Component {
  constructor(){
    super();

    this.state ={
        login: false
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
    axios.post('http://localhost:4000/user/login', {
        email: refs.username.value,
        password: refs.password.value
    }).then(function(response){
      console.log(response);
      if (response.status===200 && response.data != undefined){
        cookies.set('jwtToken', response.data, { path: '/' });

        self.setState({
          login: true
        })
      }
    }).catch(function(err){
        console.log(err);
    });
  }

  render() {
    if (this.state.login === true) {
      return <Redirect to='/' />
    }

    return (
        <section>
        <div className>
          <section className="login-form py-md-5 py-3">
            <div className="card card_border p-md-4">
              <div className="card-body">
                <form action="#">
                  <div className="login__header text-center mb-lg-5 mb-4">
                    <h3 className="login__title mb-2">signup form</h3>
                    <p>sign up form</p>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="input__label">Username</label>
                    <input type="text" className="form-control login_text_field_bg input-style" id="exampleInputEmail1" ref="username" aria-describedby="emailHelp" placeholder required autofocus />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="input__label">email</label>
                    <input type="email" className="form-control login_text_field_bg input-style" id="email" ref="email" placeholder required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="input__label">address</label>
                    <input type="text" className="form-control login_text_field_bg input-style" id="address" ref="address" aria-describedby="emailHelp" placeholder required autofocus />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="input__label">role</label><br></br>
                    <select 
                     class="form-select form-select-lg mb-3"
                    onChange={(e)=>{
                        console.log(e.target.selectedIndex)
                        }
                    }                
                    name="user" id="user">
                        <option value="client">client</option>
                        <option value="employee">employee</option>
                        <option value="supplies">supplies</option>
                    </select>   
                  </div>
                  <div className="d-flex align-items-center flex-wrap justify-content-between">
                    <input type="button" onClick={() => this.post(this.refs)} value="Login now" className="btn btn-primary btn-style mt-4" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </section>
      );
  }
}

export default Singup;
