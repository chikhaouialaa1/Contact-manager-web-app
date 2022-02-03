import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import axios from 'axios';

  
// creating functional component ans getting props from app.js and destucturing them
  const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);
  const [created, setcreated] = useState(false);


  function removeEmpty(obj) {
    return Object.entries(obj)
      .filter(([_, v]) => (v !='') && (v !=null))
      .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
  }
  function post(values){    
    let newClient=removeEmpty(values)
    console.log("new client",newClient)
    axios.post('http://localhost:4000/client/signup', newClient)
    .then((response)=>{
      //createdVar=true
      setcreated(true)
      console.log(response)
      //console.log("herrreeeeeeeeeeeeeeeeeeeee")

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
            {
              created &&
              <div class="alert alert-info" role="alert">
                      account created successfully
              </div>
            }
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
      </Card>
    </>
  );
};

export default StepTwo;