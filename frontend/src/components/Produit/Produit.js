import React from 'react'
import './Produit.css'
import { Button, Input , Tooltip, Tabs} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Produits from './produits/Produit';
import AdminHeader from '../AdminHeader/AdminHeader';
import ProduitDescription from './ProduitDescription/ProduitDescription';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function ProduitProduits({produits, deleteProduit}) {
    return (
        <div className="produitationProduits">
            <AdminHeader/>
            
            <div className="centers">
            <Tabs defaultActiveKey="1" onChange={callback} className="tabs-center" centered="true" size="large" tabBarStyle={{backgroundColor:'transparent', color:"#2E4765"}}>
                <TabPane tab="Liste des Produits" key="1" className="centre"> 
                        <Produits centersData = {produits} delProduit={deleteProduit}/>       
                </TabPane>
            </Tabs>
                
            </div>
        </div>
    )
}

export default ProduitProduits
