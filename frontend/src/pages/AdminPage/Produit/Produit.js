import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import ProduitCenters from '../../../components/Produit/Produit'
import './Produit.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Produit/index'

function Produit() {
    const produits = useSelector((state) => state.produits)
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
      useEffect(() => {
        dispatch(actions.fetchProduits(user))
      }, [])
   console.log(produits)
    const deleteProduit =  (id) => {
        dispatch(actions.deleteProduit({id,user}))}
    return (
        <div className="produitationCenter">
            <AdminSideBar/>
            {produits.loading  && <div>Loading ... </div>}
            {!produits.loading && isVisible &&(
                <ProduitCenters produits ={produits.list} deleteProduit={deleteProduit}/>
            )}
            
        </div>
    )
}

export default Produit
