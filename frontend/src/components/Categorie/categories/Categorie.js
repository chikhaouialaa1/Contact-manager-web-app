import React, {useState} from 'react'
import './Categories.css'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Table, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import CategorieDescription from '../CategorieDescription/CategorieDescription';

function Categories({centersData, delCategorie}) {
  
  const columns = [
    {
      title: 'Categorie',
      dataIndex: 'name',
      key: 'name',
    },
   
    {
      title: 'Action',
      key: 'action',
      render:(text, record, index)=>{
       if(record){
        return(
          <>

          <Link to={"/categorieDetail/"+record._id}>
            <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }} />
          </Link>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          onClick = {
            (e) => {
              delCategorie(record._id)
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
          <Link to="/addCategorie">
            <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter Categorie</Button>
          </Link>
          
          <Table dataSource={centersData} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>
        </div>
        
        
        </>
    )
}

export default Categories
