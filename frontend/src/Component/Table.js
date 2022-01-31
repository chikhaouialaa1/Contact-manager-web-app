import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';

import Sidebar from './Sidebar';
import Navbar from './Navbar';

const cookies = new Cookies();

class Table extends Component {

    constructor(){
        super();

        this.state ={
            data: [],
            success_flag: 0,
            login: true,
            username:'',
            email:'',
            role:'',
            address:'',
            userid:'',
            updateuser:false,
            user:{}
        };
    }

    
    authLogin(){
        let jwtToken = cookies.get('jwtToken');
        
        if (jwtToken === undefined){
            this.setState({
                login: false
            });
        }
    }
    
    componentWillMount(){
        this.authLogin();

        axios.post('http://localhost:4000/users')
        .then((response) =>{
            this.setState({
                data: response.data
            });
        })
    };

    delete(id){
        console.log("test")
        var self = this;
        axios.delete('http://localhost:4000/delete/user-id/'+id)
        .then(function(response){
            console.log(response);
            window.location.reload(false);

        });
    }

    getuser(id){
        console.log("test")
        //http://localhost:4000/user-id/
        axios.get('http://localhost:4000/user-id/'+id)
        .then(function(response){
            console.log(response.data);
        });

    }

    
    updateuser(user){
        console.log("updateuser")
        this.setState({
            updateuser:true,
            username:user.name,
            email:user.email,
            role:user.role,
            address:user.address,
            userid:user._id,
            user:user
        })
        console.log(this.state.username)
    }

    async doupdateuser(exctuser){
        console.log("doupdateuser")
        console.log(exctuser)
        console.log("---------------*******",this.state.user)
        let newUser = this.state.user
        newUser.name=exctuser.name 
        newUser.email=exctuser.email 
        newUser.role=exctuser.role 
        newUser.address=exctuser.address 
        
        console.log("userdb",newUser)
        axios.put('http://localhost:4000/update/user-id/'+newUser._id,newUser)
        .then(function(response){
            console.log(response);
        });
    }



    addCart(id){
        let cookieCartList = cookies.get('cart_list');
        
        if (cookieCartList === undefined){
            cookies.set('cart_list', [id], { path: '/' });
        } else {
            let exist = false;
            for (var i=0; i<cookieCartList.length; i++){
                if (cookieCartList[i] === id){
                    exist = true;
                    break;
                }
            }

            if (!exist){
                cookieCartList.push(id);
                cookies.set('cart_list', cookieCartList, { path: '/' });
            }
        }

        cookieCartList = cookies.get('cart_list');

        this.setState({
            success_flag: 1
        });
    }

    render() {
        if (this.state.login === false) {
            return <Redirect to='/login' />
        }

        if (this.state.success_flag === 1){
            var success_flag = <div className="form-group">
                <br></br>
                <div class="alert alert-success" role="alert">
                    <strong>Well done! </strong>
                    <span>You successfully read this important alert message.</span>
                    <a href="#" class="alert-link">alert link</a>
                </div>
            </div>
        }

        const list_data = this.state.data.map((item, index)=> {
            return <tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.address}</td>
                <td><button className='btn btn-danger' onClick={() => this.delete(item._id)}>Delete</button></td>
                <td><button className='btn btn-primary' onClick={() => this.getuser(item._id)}>View</button></td>
                <td><button className='btn btn-info' onClick={() => this.updateuser(item)}>update</button></td>
            </tr>
        })

        return (
            <section id="admin">
            <Sidebar />
            <div class="content">
              <Navbar />
                <div className="col-md-12">
                    {success_flag}
                    <div className="widget p-lg">
                    <h4 className="m-b-lg">List</h4>
                        <table className="table">
                            <tbody>
                                {
                                this.state.updateuser &&
                                <>
                                    <tr >
                                        <th class="badge bg-primary text-wrap">UPDATE USER</th>
                                        <th>Name</th>
                                        <th>email</th>
                                        <th>role</th>
                                        <th>address</th>
                                    </tr>
                                    <tr>
                                        <th>DETIALS</th>
                                        <th><input type="text" class="form-control" id="updatename" ref="updatename" placeholder={this.state.username} required autofocus  ></input></th>
                                        <th><input type="text" class="form-control" id="updateemail" ref="updateemail" placeholder={this.state.email} required autofocus  ></input>{this.state.username}</th>
                                        <th><input type="text" class="form-control" id="updaterole" ref="updaterole" placeholder={this.state.role} required autofocus ></input></th>
                                        <th><input type="text" class="form-control" id="updateaddress" ref="updateaddress" placeholder={this.state.address} required autofocus ></input></th>
                                        <td><button className='btn btn-info' onClick={() => 
//                                        console.log(this.refs.updateaddress.value)
                                        this.doupdateuser({
                                            name:this.refs.updatename.value,
                                            email:this.refs.updateemail.value,
                                            role:this.refs.updaterole.value,
                                            address:this.refs.updateaddress.value,                        
                                        })
                                        }>update</button></td>
                                    </tr>
                                </>
                                }
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>role</th>
                                    <th>address</th>
                                    <th>Delete user</th>
                                    <th>view user</th>
                                    <th>update user</th>
                                </tr>
                                {list_data}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </section>
        );
    }
}

export default Table;
