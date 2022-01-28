import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import AdminHeader from '../../../../components/AdminHeader/AdminHeader'
import AdminSideBar from '../../../../components/AdminSideBar/AdminSideBar'
import UserDescription from '../../../../components/User/UserDescription/UserDescription'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../../redux/actions/User/index'

function UserDetail() {
    const  {id}  = useParams();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(actions.fetchUserById(id,user))
    }, [])
    const users = useSelector((state) => state.users)

    const updateUser= async (id, usereName) => {
        dispatch(actions.updateUser(id, { usereName }))
    }  
   
    var userDescription = users.selectedUser
    console.log(userDescription )
    return (
        <div>
            <AdminSideBar/>
            <div className="content">

                <AdminHeader/>
                {userDescription && (
                <UserDescription centerDescription={userDescription} updateUser={updateUser}/>)}
            </div>
        </div>
    )
}

export default UserDetail
