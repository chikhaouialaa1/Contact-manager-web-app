import React from "react";
import { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const Final = ({ values,handleFormData,prevStep }) => {
const [error, setError] = useState(false);
const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    
    /*
     if (validator.isEmpty(values.email) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
    */
  };
/*
  function post(values){    
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
    }).catch(function(err){
        console.log(err);
    });
  }

  
/*
    const [formData, setFormData] = useState({
        //all users : client,empl , fornisseur
        name : "",
        email : "",
        role : "",
        password  : ""
        address : ""
        tel :""
        //empl
        salary:""
        post : ""
        //fornisseur
        suppliers
      })
  */

    //destructuring the object from values
  const { firstName, lastName, age, email } = values;
  
  return (
    <>

      <Card style={{ marginTop: 100, textAlign: "left" }}>
      <h1>{values.role}</h1>
        <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>suppliers</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="suppliers"
                defaultValue={values.suppliers}
                type="text"
                placeholder="suppliers"
                onChange={handleFormData("suppliers")}
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
                name="password"
                defaultValue={values.password}
                type="text"
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

        </Card.Body>
      </Card>
    </>
  );
};

export default Final;