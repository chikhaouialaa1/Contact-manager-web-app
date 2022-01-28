import React, { useState, useEffect } from 'react'
import { Input, Radio,DatePicker, InputNumber, Button} from 'antd';
import 'antd/dist/antd.css';
import './AddUserFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as userActions from '../../../redux/actions/User/index'

  

function AddUserForm({gouvernorat}) {
  const user = useSelector((state) => state.user)
  const token=user.token
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+token)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")
  const [role, setRole] = useState(1)

  const addUser =  (name,email,password,address,paymentMethod,role,token) => {
    dispatch(userActions.addUser({name,email,password,address,role,paymentMethod,token}))
  }

  const handleAddUser = () => {
    addUser(name,email,password,address,paymentMethod,role,token)
    setName("")
   
  }
  
   
    return (
        <div className="addForm">
          
            <h6>Nom User</h6>
            <Input placeholder="Entrer le nom" className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            
            <h6>Email</h6>
            <Input placeholder="Entrer la quantité" className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
          
            <h6>Password</h6>
            <Input placeholder="Entrer le Prix" className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>

          <h6>Adress</h6>
            <Input placeholder="Entrer le Prix" className="input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}/>
              <h6> paymentMethod</h6>
                <Radio.Group name="radiogroup" defaultValue={1} style={{marginTop:"10px", marginBottom:"10px" }} 
                onChange={(e)=>{
                    setPaymentMethod(e.target.value)}}
                >
                    <Radio value={"espece"}>Espece</Radio>
                    <Radio value={"chec"}>Chec</Radio>
                </Radio.Group>
            
            <Button className="button" onClick={handleAddUser}>Ajouter User</Button>
        </div>
    )
}

export default AddUserForm
