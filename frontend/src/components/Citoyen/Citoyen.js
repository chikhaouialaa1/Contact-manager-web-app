import React from "react";
import { Card, Button, Input } from "antd";
import { Image } from "antd";
import Navbar from "../Navar/Navbar";
import "./Citoyen.css";

function Citoyen() {
  return (
    <div className="citoyen">
      <Navbar />
      <div className="contentInscri">
        <div className="choicePage">
          <div className="choiceButton">
            <h2> Connexion Espace citoyen </h2>
            <div style={{ margin: "auto" }}>
              <h6>Num Inscription EVAX </h6>
              <Input
                size="large"
                placeholder="Num inscription Evax "
                className="numEvax"
              />
              <h6>Code de vérification</h6>
              <Input
                size="large"
                placeholder="code de vérification  "
                className="numEvax"
              />
                  <Button
                type="primary"
                shape="round"
                style={{
                  background: "#FFBC6E",
                  borderColor: "#FFBC6E",
                  paddingLeft: 5,
                  marginLeft: 130,
                }}
              >
                Envoyer
              </Button>
          
            </div>
            
          </div>

          <img src="/meter.png" alt="inscription" className="img" />
        </div>
      </div>
    </div>
  );
}

export default Citoyen;
