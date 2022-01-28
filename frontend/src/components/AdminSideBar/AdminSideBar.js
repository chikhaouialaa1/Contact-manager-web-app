import React from 'react'
import {Link} from 'react-router-dom'
import {HomeOutlined} from '@ant-design/icons';
import {SideBarData} from './SideBarData'
import './AdminSideBar.css'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';

function AdminSideBar() {
    const navigate = useNavigate();

    const user = useSelector((state) => state.user)
    if(user.token===""){
        navigate('/login');
    }
    return (
        <div className="navbar">
            <div >
                <Link to="/" className="menu-bars">
                    <div className="logo">
                    <img src="/logo.png" alt="logo"/>
                    <h1>E-Commerce</h1>
                    </div>
                    
                </Link>
            </div>
            <div className="items">
                <ul className="nav-menu-items">
                    {SideBarData.map((item, index)=>{
                        return(
                            <li key="index" className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default AdminSideBar
