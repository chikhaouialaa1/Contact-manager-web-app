import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBarEcom'
import Ecom from '../../../components/Produit/Ecom'
import './Produit.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Produit/index'
import * as action from '../../../redux/actions/Categorie/index'


function Produit() {
    const produits = useSelector((state) => state.produits)
    const user = useSelector((state) => state.user)
    const categories = useSelector((state) => state.categories)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
      useEffect(() => {
        dispatch(action.fetchCategories(user))
      }, [])
      useEffect(() => {
        dispatch(actions.fetchProduits(user))
      }, [])
   console.log(categories)
    const deleteProduit =  (id) => {
        dispatch(actions.deleteProduit({id,user}))}
        let sidebar
        if(categories){
            sidebar=  <AdminSideBar categories={categories.list} />
        }else{
            sidebar=  <AdminSideBar />
 
        }
    return (
        <div className="produitationCenter">
            
           {sidebar}
           
                <Ecom produits ={produits.list} />
          
            
        </div>
    )
}

export default Produit
