import React from 'react'
import { Button} from 'antd';
import './Choice.css';
function Choice() {
    return (
        <div className="choicePage">
            <div className="choiceButton">
                <h2> Inscription</h2>
                <div style={{margin:"auto"}}>
                    <Button className="chBtn">Citoyen possedant une CIN </Button>
                    <Button className="chBtn">Citoyen ne possedant pas une CIN </Button>
                    <Button className="chBtn">Citoyen étrangé </Button>
                </div>
            </div>
            
            <img src="/vacc.jpg" alt="inscription" className="img"/>
            
        </div>
    )
}

export default Choice
