import { Button } from 'antd';
import React from 'react'
import Navbar from '../../../components/Navar/Navbar';
import backI from '../../../image/header.png'
import './Home.css';
function home() {
    return (
        <div className="home-container">
            <div className="header-accueil" style={{backgroundImage: 'url('+backI+')',
          backgroundSize: "cover",
          height:"90vh"}}>
                <Navbar/>
                <h1 style={{color:"white", alignSelf:"center",justifySelf:"center", marginTop:"200px"}}>Bienvenu au portail de Vaccination contre la COVID-19</h1>
                <Button className="button-inscri">Inscrivez-vous</Button>
            </div>
            <div className="numero-vert">
                <img src="/num.png"/>
                <div style={{display:"flex", flexDirection:"column", justifySelf:"center", alignSelf:"center", marginTop:"10px", marginLeft:"5px"}}>
                    <h4 style={{color:"white"}}>Numéro vert</h4>
                    <h3 style={{color:"white"}}>80102021</h3>
                </div>
            </div>
            <div className="stat-container">
                <h1>Statistique sur les campagnes de vaccination en Tunisie</h1>
            </div>
            <div className="etape-container">
                <h1>Etape de vaccination contre le covid 19</h1>
            </div>
            <div className="etape-container">
                <h1>Symptôme de COVID-19</h1>
            </div>
            <div className="etape-container">
                <h1>Question fréquemment demandés</h1>
            </div>
            <div className="footer">
                <h1>footer</h1>
            </div>
        </div>
    )
}

export default home
