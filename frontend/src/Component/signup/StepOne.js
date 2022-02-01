import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const StepOne = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      //validator.isEmpty(values.name) ||     
      validator.isEmpty(values.name)    
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };
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
  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <h1>Register form</h1>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="name"
                defaultValue={values.name}
                type="text"
                placeholder=" Name"
                onChange={handleFormData("name")}
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="email"
                placeholder="email"
                onChange={handleFormData("email")}
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="address"
                defaultValue={values.firstName}
                type="text"
                placeholder="Address"
                onChange={handleFormData("address")}
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
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="tel"
                defaultValue={values.tel}
                type="text"
                placeholder="Telephone"
                onChange={handleFormData("tel")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <select 
                    className="form-select"
                    onChange={(e)=>{
                        console.log(e.target.selectedIndex)
                        }
                    }
                    defaultValue={values.role}
                    onChange={handleFormData("role")}                
                    name="user" id="user">
                        <option value="client">client</option>
                        <option value="employee">employee</option>
                        <option value="supplies">supplies</option>
             </select><br></br><br></br>
            <Button variant="primary" type="submit">
                NEXT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StepOne;