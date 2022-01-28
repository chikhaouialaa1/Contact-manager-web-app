import React , { useState, useEffect }from 'react'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import './ProduitDescription.css'
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Produit/index'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
 
function CenterDescription({centerDescription, updateCenter}) {
  const navigate = useNavigate();

const dataSource = [
  {
    key: '1',
    name: centerDescription.name,
    prix: centerDescription.prix,
    quantity: centerDescription.quantity,

    total:10
  }
];

  const columns = [
    {
      title: 'Produit',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    }
    , {
      title: 'Prix',
      dataIndex: 'prix',
      key: 'prix',
    }
    
    
  ];
  console.log(centerDescription)
  const [visible, setVisible] = useState(false);
  const  {id}  = useParams();
  const dispatch = useDispatch()

 
  const user = useSelector((state) => state.user)

  //setProduiteName(centerDescription.name)
  const [name, setName] = useState(centerDescription.name);
  const [prix, setPrix] = useState(centerDescription.prix);
  const [quantity, setQuantity] = useState(centerDescription.quantity);
  const updateProduit= async (id, name,prix,quantity) => {
    dispatch(actions.updateProduit(id, { name,prix,quantity },user.token))
 

}  

  const handleAddProduit = () => {
    updateProduit(id,name,prix,quantity)
    navigate('/produit');
   
  }
  const edit = () => {
    setVisible(true)
    setName(centerDescription.name)
    setPrix(centerDescription.prix)
    setQuantity(centerDescription.quantity)

  }

    return (
        <div>
            <Button  type="dashed" ghost danger style={{position:'absolute', top:'60px', right:'10px', paddingRight:'20px'}} onClick={() => edit()}><EditOutlined style={{ fontSize: '16px'}} danger/>Editer</Button>
          
            <Drawer
              title="Editer centre"
              width={520}
              onClose={() => setVisible(false)}
              visible={visible}
              bodyStyle={{ paddingBottom: 80 }}
              extra={
                <Space>
                  <Button onClick={() => setVisible(false)} className="cancel">Cancel</Button>
                  <Button onClick={() => handleAddProduit()} type="primary" className="submit">
                    Submit
                  </Button>
                </Space>
              }
            >
              <h6>Produit</h6>
              <Input placeholder="Entrer produit" className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
               <h6>Prix</h6>
              <Input placeholder="Entrer produit" className="input"
              value={prix}
              onChange={(e) => setPrix(e.target.value)}/> 
              <h6>Quantity</h6>
              <Input placeholder="Entrer produit" className="input"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}/>
            </Drawer>
           
            <div className="moreinfo">
                <div>
                    <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Detail du produit</h5>
                    <Table dataSource={dataSource} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>;
                </div>
               
            </div>
            
            

        </div>
    )
}

export default CenterDescription
