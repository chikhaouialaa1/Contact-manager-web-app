import React , { useState, useEffect }from 'react'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import './CategorieDescription.css'
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/Categorie/index'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
 
function CenterDescription({centerDescription, updateCenter}) {
  const navigate = useNavigate();

const dataSource = [
  {
    key: '1',
    name: centerDescription.name,
       total:10
  }
];

  const columns = [
    {
      title: 'Categorie',
      dataIndex: 'name',
      key: 'name',
    },
    
    
  ];
  console.log(centerDescription)
  const [visible, setVisible] = useState(false);
  const  {id}  = useParams();
  const dispatch = useDispatch()

 
  const user = useSelector((state) => state.user)

  //setCategorieeName(centerDescription.name)
  const [name, setName] = useState(centerDescription.name);
  
  const updateCategorie= async (id, name) => {
    dispatch(actions.updateCategorie(id,  name ,user.token))
 

}  

  const handleAddCategorie = () => {
    updateCategorie(id,name)
    navigate('/categorie');
   
  }
  const edit = () => {
    setVisible(true)
    setName(centerDescription.name)
  

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
                  <Button onClick={() => handleAddCategorie()} type="primary" className="submit">
                    Submit
                  </Button>
                </Space>
              }
            >
              <h6>Categorie</h6>
              <Input placeholder="Entrer categorie" className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
              
            </Drawer>
           
            <div className="moreinfo">
                <div>
                    <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Detail du categorie</h5>
                    <Table dataSource={dataSource} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>;
                </div>
               
            </div>
            
            

        </div>
    )
}

export default CenterDescription
