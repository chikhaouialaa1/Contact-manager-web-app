import React, {useState} from 'react'
import './Users.css'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Table, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import UserDescription from '../UserDescription/UserDescription';

function Users({centersData, delUser}) {
  
  const columns = [
    {
      title: 'User Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'quantity',
    },  {
      title: 'Role',
      dataIndex: 'role',
      key: 'quantity',
    },  {
      title: 'Adress',
      dataIndex: 'adress',
      key: 'quantity',
    },
    {
      title: 'Payment_Method',
      dataIndex: 'paymentMethod',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render:(text, record, index)=>{
       if(record){
        return(
          <>

          <Link to={"/userDetail/"+record._id}>
            <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }} />
          </Link>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          onClick = {
            (e) => {
              delUser(record._id)
              console.log("corresponding id is :", record._id)
            }}/>

          </>
        )
          }
      }

    },
  ];
    return (
      <>
        <div className="table">
          <Link to="/addUser">
            <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter User</Button>
          </Link>
          
          <Table dataSource={centersData} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>
        </div>
        
        
        </>
    )
}

export default Users
