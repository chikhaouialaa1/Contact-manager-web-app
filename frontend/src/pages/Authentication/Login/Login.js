import React from 'react'
import { Button, Input} from 'antd';
import './Login.css';
import Navbar from '../../../components/Navar/Navbar';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import AuthService from '../../../../src/services/auth-Service'
import * as loginActions from '../../../redux/actions/Inscription/index'
import { useNavigate } from 'react-router-dom';

import { useState } from 'react'    

import { useDispatch, useSelector } from "react-redux"
import  authUser from "../../../redux/actions/auth-user-action"

import {badpassword} from '../../../services/auth-Service'

import { Alert } from 'antd';
//import { Redirect } from 'react-router-dom';

import { Navigate } from 'react-router-dom';



function Login() {
    //console.log(badpassword)
   let  badpassword=false
   const navigate = useNavigate();


/*
    console.log("teeessstttt")  
    let res =  AuthService("mayssamelliti@gmail.com","123")
    console.log(res)
    console.log(AuthService("mayssamelliti@gmail.com","123"))
     {badpassword ?
                    <Alert message="bad password please try again" type="error" showIcon />
                    :
                    <Navigate to="/" /> 
                }
*/
    const dispatch = useDispatch()   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [code, setCode] = useState("")

    const login =  (email,password) => {
      dispatch(loginActions.login({email,password}))
     
      navigate('/produit');

    }
   
    const handleLogin = () => {
        login(email,password)
     
    }
    
      
    
    return (


        <div className="inscri">
            <Navbar/>
        <div className="contentInscri">
        <div className="choicePage">
            <div className="choiceButton">
                <h2> Login</h2>
                <div style={{margin:"auto"}}>
                <h6>Email</h6>
            <Input placeholder="Email"    className="inputInfo"
                            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
                        <h6>Mot de passe</h6>
                        <Input.Password
                         index="2"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                            className="inputInfo"
                            size="large"
                            placeholder="mot de passe"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                    <Button 
                    onClick={()=>{
                        dispatch(  handleLogin);
                        
                     }}
                    className="suivant">Login </Button>

                </div>
               
            
            </div>
            
            <img src="/vacc.jpg" alt="inscription" className="img"/>
            
        </div>
        </div>
        
    </div>
        
    )
}

export default Login
