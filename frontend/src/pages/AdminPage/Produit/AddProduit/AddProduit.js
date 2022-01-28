import React, { useState, useEffect }from 'react'
import './AddProduit.css'
import { Table, Button} from 'antd';
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/Produit/AddProduitForm/AddProduitForm';
import { useDispatch, useSelector } from "react-redux"
import {getGouvernorat} from '../../../../services/center.service'
import * as actions from '../../../../redux/actions/Categorie/index'

function AddCenter() {
    const categories = useSelector((state) => state.categories)
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(actions.fetchCategories(user))
      }, [])
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
   
    return (
        <div>
            <AdminSideBar/>
            <div className="content">
                <AdminHeader/>
                <div className="form">
                    <AddCenterForm categories={categories} 
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default AddCenter
