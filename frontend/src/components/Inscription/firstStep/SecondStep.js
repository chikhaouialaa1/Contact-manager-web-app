import React from 'react'
import './FirstStep.css'
import { Input, DatePicker, InputNumber, Button, Select} from 'antd';
import {data} from './FirstStep'
import { useDispatch } from "react-redux";
import { useState } from 'react'    

var user={
    name:'',
    email:'',
    role:'',
    address:'',
    paymentMethod:'',password:'',
}

function SecondStep() {
    user.name=data.name

    user.paymentMethod=data.paymentMethod
    
    user.address=data.address
    const { Option } = Select;
    console.log(data)
    const [state1, setState1]= useState("")
    const [state2, setState2]= useState("")
    return (
        
        <div className="formulaire">

                <h6> Email</h6>
                <Input value={state1}
                    onChange={(e)=>{
                    //console.log(e.target.value)
                    setState1(e.target.value)
                    user.email=e.target.value

                    //data.push(e.target.value)
                    }    
                }       className="inputInfo"/>
                <h6> Password</h6>
                <Input value={state2} onChange={(e)=>{
                    //console.log(e.target.value)
                    setState2(e.target.value)
                    user.password=e.target.value
                    //data.push(e.target.value)
                    }    
                } className="inputInfo"/>
                
                
        </div>
    )
}
export { user as data} 

export default SecondStep
