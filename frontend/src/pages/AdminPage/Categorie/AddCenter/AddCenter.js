import React, { useState, useEffect }from 'react'
import './AddCenter.css'
import { Table, Button} from 'antd';
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import AdminHeader from '../../../../components/AdminHeader/AdminHeader';
import AddCenterForm from '../../../../components/Categorie/AddCategorieForm/AddCategorieForm';
import { useDispatch, useSelector } from "react-redux"
import {getGouvernorat} from '../../../../services/center.service'

function AddCenter() {

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
                    <AddCenterForm 
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default AddCenter
