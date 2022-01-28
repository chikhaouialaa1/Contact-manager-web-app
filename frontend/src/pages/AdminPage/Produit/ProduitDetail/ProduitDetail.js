import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import ProduitDescription from '../../../../components/Produit/ProduitDescription/ProduitDescription'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/Produit/index'

function ProduitDetail() {
    const  {id}  = useParams();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(actions.fetchProduitById(id,user))
    }, [])
    const produits = useSelector((state) => state.produits)

    const updateProduit= async (id, produiteName) => {
        dispatch(actions.updateProduit(id, { produiteName }))
    }  
   
    var produitDescription = produits.selectedProduit
    console.log(produitDescription )
    return (
        <div>
            <AdminSideBar/>
            <div className="content">

                <AdminHeader/>
                {produitDescription && (
                <ProduitDescription centerDescription={produitDescription} updateProduit={updateProduit}/>)}
            </div>
        </div>
    )
}

export default ProduitDetail
