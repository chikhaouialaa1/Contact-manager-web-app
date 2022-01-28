import React, { useState, useEffect }from 'react'
import AdminSideBar from '../../../components/AdminSideBar/AdminSideBar'
import UserCenters from '../../../components/User/User'
import './User.css'
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/User/index'

function User() {
    const users = useSelector((state) => state.users)
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const toggleVisibility = () => {
        setIsVisible(!isVisible)
      }
      useEffect(() => {
        dispatch(actions.fetchUsers(user))
      }, [])
   console.log(users)
    const deleteUser =  (id) => {
        dispatch(actions.deleteUser({id,user}))}
    return (
        <div className="userationCenter">
            <AdminSideBar/>
            {users.loading  && <div>Loading ... </div>}
            {!users.loading && isVisible &&(
                <UserCenters users ={users.list} deleteUser={deleteUser}/>
            )}
            
        </div>
    )
}

export default User
