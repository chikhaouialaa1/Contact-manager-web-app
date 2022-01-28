
import React from 'react'
import InscriSteps from '../../../components/Inscription/inscriSteps/InscriSteps';
import Navbar from '../../../components/Navar/Navbar';
import './Inscription.css';
//import AuthService from '../../../services/authService'
import AuthService from '../../../../src/services/auth-Service'

//C:\Users\HP\Desktop\React\finalProject\EVAX-ISAMM-master\front-evax-main\src\services\auth-Servicejs
function Inscription() {
    return (
        <div className="inscri">
            <Navbar/>
            <div className="contentInscri">
                <InscriSteps/>
            </div>
        </div>
    )
}

export default Inscription
