import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

// creating functional component ans getting props from app.js and destucturing them
const StepFour = ({ nextStep,prevStep,handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const cookies = new Cookies();

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    }
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
      }).catch(function(err){
          console.log(err);
      });
    }
/*
    function post(values){    
      newClient=removeEmpty(values)
      axios.post('http://localhost:4000/client/signup', newClient)
      .then(function(response){
        console.log(response)
      }).catch(function(err){
          console.log(err);
      });
    }
  */
  /*
  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  */

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
      <h1>{values.role}</h1>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
            <Form.Label>Step Four</Form.Label>

              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="password"
                defaultValue={values.password}
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
              variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepFour;