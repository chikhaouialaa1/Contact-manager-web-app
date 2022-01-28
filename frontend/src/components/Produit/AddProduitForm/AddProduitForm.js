import React, { useState, useEffect } from 'react'
import {Input, Button, Select, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import './AddProduitFrom.css'
import { useDispatch, useSelector } from "react-redux"
import * as produitActions from '../../../redux/actions/Produit/index'

const { Option } = Select;


function AddProduitForm({categories}) {
  const user = useSelector((state) => state.user)
  const token=user.token
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+token)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [prix, setPrix] = useState("")
  const [categorie, setCategorie] = useState("")
  const [url, setUrl] = useState("")

  const addProduit =  (name,prix,quantity,categorie,url,token) => {
    dispatch(produitActions.addProduit({name,prix,quantity,categorie,url,token}))
  }

  const handleAddProduit = () => {
    addProduit(name,prix,quantity,categorie,url,token)
    setName("")
   
  }
  const options = categories.list.map((item, index)=>{
    console.log(item);
    if(item){
    return(
      <Option value={item._id}>{item.name}</Option>
    )
  }
  })
   
    return (
        <div className="addForm">
          
            <h6>Nom Produit</h6>
            <Input placeholder="Entrer le nom" className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            
            <h6>Quantity</h6>
            <Input placeholder="Entrer la quantité" className="input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}/>
          
            <h6>Prix</h6>
            <Input placeholder="Entrer le Prix" className="input"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}/>
            <h6>Image Url</h6>
            <Input placeholder="Entrer le lien" className="input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>
              <h6>Categorie</h6>
<Select
                className="input"
                placeholder="choisir une Categorie"
                onChange={(value)=>{
                  
                  setCategorie(value)
                }}
            >
               {options}
            </Select>
            
            <Button className="button" onClick={handleAddProduit}>Ajouter Produit</Button>
        </div>
    )
}

export default AddProduitForm
