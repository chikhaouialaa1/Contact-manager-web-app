import React, { useState, useEffect } from 'react'
import {Input, Button, Select, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import './AddCategorieFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as categorieActions from '../../../redux/actions/Categorie/index'

  

function AddCategorieForm({gouvernorat}) {
  const user = useSelector((state) => state.user)
  const token=user.token
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+token)
  const dispatch = useDispatch()
  const [name, setName] = useState("")

  const addCategorie =  (name,token) => {
    dispatch(categorieActions.addCategorie({name,token}))
  }

  const handleAddCategorie = () => {
    addCategorie(name,token)
    setName("")
   
  }
  
   
    return (
        <div className="addForm">
          
            <h6>Nom Categorie</h6>
            <Input placeholder="Entrer le nom" className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            
           
            <Button className="button" onClick={handleAddCategorie}>Ajouter Categorie</Button>
        </div>
    )
}

export default AddCategorieForm
