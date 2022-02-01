import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import React from "react"; 

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import Final from "./Final";
import StepFour from "./StepFour";


function Signup() {
  //state for steps
  const [step, setstep] = useState(1);
/*
  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    
  })
  */
    const [formData, setFormData] = useState({
        //all users : client,empl , fornisseur
        name : "",
        email : "",
        role : "client",
        password  : "" ,
        address : "" ,
        tel :"" ,
        //empl
        salary:"" , 
        post : "",
        //fornisseur
        suppliers : "" 
      })
  

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    if(formData.role==="client"){
      setstep(3);
    }
    if(formData.role==="employee"){
      setstep(2);
    }
    if(formData.role==="supplies"){
      setstep(4);
    }
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
      setstep(1);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  function testfuncntion()
  {
    console.log(formData.role)
    if(formData.role="client"){
      setstep(4);
    }
  }
  
  function showdata(formData)
  {
    console.log(formData)
  }

// javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne {...showdata(formData)} nextStep={nextStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo  nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      // case 3 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 4 }} className="custom-margin">
                <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
      // Only formData is passed as prop to show the final value at form submit
    case 4:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 4 }} className="custom-margin">
                <Final nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // default case to show nothing
    default:
      return (
        <div className="App">
        </div>
      );
  }
}

export default Signup;


/*
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
*/