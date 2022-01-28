import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import CategorieDescription from '../../../../components/Categorie/CategorieDescription/CategorieDescription'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/Categorie/index'

function CategorieDetail() {
    const  {id}  = useParams();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(actions.fetchCategorieById(id,user))
    }, [])
    const categories = useSelector((state) => state.categories)

    const updateCategorie= async (id, categorieeName) => {
        dispatch(actions.updateCategorie(id, { categorieeName }))
    }  
   
    var categorieDescription = categories.selectedCategorie
    console.log(categorieDescription )
    return (
        <div>
            <AdminSideBar/>
            <div className="content">

                <AdminHeader/>
                {categorieDescription && (
                <CategorieDescription centerDescription={categorieDescription} updateCategorie={updateCategorie}/>)}
            </div>
        </div>
    )
}

export default CategorieDetail
