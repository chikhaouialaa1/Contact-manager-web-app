import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

  
// creating functional component ans getting props from app.js and destucturing them
const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);
/*
    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  }
    */

  function removeEmpty(obj) {
    return Object.entries(obj)
      .filter(([_, v]) => (v !='') && (v !=null))
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  }
  function post(values){    
    let newClient=removeEmpty(values)
    axios.post('http://localhost:4000/client/signup', newClient)
    .then(function(response){
      console.log(response)
      return <Redirect to='/' />

    }).catch(function(err){
        console.log(err);
    });
  }

  return (
    <>
      <Card style={{ marginTop: 100 }}>
      <h1>{values.role}</h1>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>salary</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="salary"
                onChange={handleFormData("salary")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>post</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                placeholder="post"
                onChange={handleFormData("post")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>password</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="password"
                placeholder="password"
                onChange={handleFormData("password")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="primary" onClick={prevStep}>
                Previous
              </Button>

              <Button
                onClick={
                    ()=>{
                    post(values)
                    console.log("************",removeEmpty(values))}
                    }
                variant="primary">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
        <button to="/login" >back to login page</button>
        <li className="nav-item"><Link to="/cart" className="nav-link"><i className="fa fa-table" />cart</Link></li>

      </Card>
    </>
  );
};

export default StepTwo;