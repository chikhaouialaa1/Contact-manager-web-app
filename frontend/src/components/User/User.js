import React from 'react'
import './User.css'
import { Button, Input , Tooltip, Tabs} from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import Users from './users/User';
import AdminHeader from '../AdminHeader/AdminHeader';
import UserDescription from './UserDescription/UserDescription';
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function UserUsers({users, deleteUser}) {
    return (
        <div className="userationUsers">
            <AdminHeader/>
            
            <div className="centers">
            <Tabs defaultActiveKey="1" onChange={callback} className="tabs-center" centered="true" size="large" tabBarStyle={{backgroundColor:'transparent', color:"#2E4765"}}>
                <TabPane tab="Liste des Utilisateurs" key="1" className="centre"> 
                        <Users centersData = {users} delUser={deleteUser}/>
                        
                </TabPane>
            </Tabs>
                
            </div>
        </div>
    )
}

export default UserUsers
