import React , { useState, useEffect }from 'react'
import { Button, Descriptions, Table, Drawer, SpaceInput, Select, Input, Space} from 'antd';
import 'antd/dist/antd.css';
import './UserDescription.css'
import {EyeOutlined, DeleteOutlined, EditOutlined} from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux"
import * as actions from '../../../redux/actions/User/index'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const { Option } = Select;
 
function CenterDescription({centerDescription, updateCenter}) {
  const navigate = useNavigate();

const dataSource = [
  {
    key: '1',
    name: centerDescription.name,
    email: centerDescription.email,
    password: centerDescription.password,
    address: centerDescription.address,

    total:10
  }
];

  const columns = [
    {
      title: 'User',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    }
    , {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },{
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
    
    
  ];
  console.log(centerDescription)
  const [visible, setVisible] = useState(false);
  const  {id}  = useParams();
  const dispatch = useDispatch()

 
  const user = useSelector((state) => state.user)

  //setUsereName(centerDescription.name)
  const [name, setName] = useState(centerDescription.name);
  const [email, setEmail] = useState(centerDescription.email);
  const [password, setPassword] = useState(centerDescription.password);
  const [address, setAdress] = useState(centerDescription.address);

  const updateUser= async (id, name,email,password) => {
    dispatch(actions.updateUser(id, { name,email,password },user.token))
 

}  

  const handleAddUser = () => {
    updateUser(id, name,email,password)
    navigate('/user');
   
  }
  const edit = () => {
    setVisible(true)
    setName(centerDescription.name)
    setPassword(centerDescription.password)
    setEmail(centerDescription.email)

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
                  <Button onClick={() => handleAddUser()} type="primary" className="submit">
                    Submit
                  </Button>
                </Space>
              }
            >
              <h6>User</h6>
              <Input placeholder="Entrer user" className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}/>
               <h6>email</h6>
              <Input placeholder="Entrer user" className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}/> 
              <h6>password</h6>
              <Input placeholder="Entrer user" className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </Drawer>
           
            <div className="moreinfo">
                <div>
                    <h5 style={{color:"#FFBC6E", marginTop:"25px", fontSize:'20px'}}>Detail du user</h5>
                    <Table dataSource={dataSource} columns={columns} style={{width:'100%', borderRadius:'25px'}}> </Table>;
                </div>
               
            </div>
            
            

        </div>
    )
}

export default CenterDescription
