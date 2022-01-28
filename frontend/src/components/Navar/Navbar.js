import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { NavbarData } from './NavbarData'


function Navbar() {
    return (
        <div className="nav">
                <div className="logoNav">
                    <img src="/cells.png" alt="logo" width="50px" height="50px"/>
                    <h2 style={{marginLeft:'20px', color:'#2E4765', marginTop:'10px'}}>E-Commerce</h2>
                </div>
                <ul className="navbar-menu-items">
                    {NavbarData.map((item, index)=>{
                        return(
                            <li key="index" className={item.cName}>
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                
                
                
            
        </div>
    )
}

export default Navbar
