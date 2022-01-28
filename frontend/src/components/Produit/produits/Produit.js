import React, {useState} from 'react'
import './Produits.css'
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom'
import { Table, Button} from 'antd';
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import ProduitDescription from '../ProduitDescription/ProduitDescription';

function Produits({centersData, delProduit}) {
  
  const columns = [
    {
      title: 'Produit',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },  {
      title: 'Prix',
      dataIndex: 'prix',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render:(text, record, index)=>{
       if(record){
        return(
          <>

          <Link to={"/produitDetail/"+record._id}>
            <EyeOutlined style={{ fontSize: '16px', color: '#ABABFD' }} />
          </Link>
          <DeleteOutlined style={{ fontSize: '16px', color: '#FD9F9F' }}
          onClick = {
            (e) => {
              delProduit(record._id)
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
          <Link to="/addProduit">
            <Button type="dashed" ghost danger style={{marginTop:'5px', marginBottom:'5px'}}>Ajouter Produit</Button>
          </Link>
          
          <Table dataSource={centersData} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>
        </div>
        
        
        </>
    )
}

export default Produits
