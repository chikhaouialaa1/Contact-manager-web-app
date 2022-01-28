import React from 'react'
import './Categorie.css'
import { Button, Input , Tooltip, Tabs} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Categories from './categories/Categorie';
import AdminHeader from '../AdminHeader/AdminHeader';
import CategorieDescription from './CategorieDescription/CategorieDescription';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function CategorieCategories({categories, deleteCategorie}) {
    return (
        <div className="categorieationCategories">
            <AdminHeader/>
            
            <div className="centers">
            <Tabs defaultActiveKey="1" onChange={callback} className="tabs-center" centered="true" size="large" tabBarStyle={{backgroundColor:'transparent', color:"#2E4765"}}>
                <TabPane tab="Liste des Categories" key="1" className="centre"> 
                        <Categories centersData = {categories} delCategorie={deleteCategorie}/>
                        
                </TabPane>
            </Tabs>
                
            </div>
        </div>
    )
}

export default CategorieCategories
