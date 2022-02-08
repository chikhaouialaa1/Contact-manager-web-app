import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'universal-cookie';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
  } from "recharts";
const cookies = new Cookies();

class Form extends Component {

    constructor(){
        super();
        this.state ={
            success_flag: 0,
            selectedFile: null,
            login: true,
            data: {},
            clientlist:{},
            supplieslist:{},
            employeelist:{}
        };
    }

    
    async get_data(){
        console.log("aaaaaaaaaaaaaaaaaaaaaa")
        await axios.post('http://localhost:4000/users')
        .then((response) =>{
            this.setState({
                data: response.data
            });
        })
        console.log(this.state.data)
        this.setState({
            clientlist : this.extractor(this.state.data,"client"),
            employeelist : this.extractor(this.state.data,"employee"),
            supplieslist : this.extractor(this.state.data,"supplies")
        });
    }

    extractor(data,type){
        let list=[]
        for (let i=0;i<data.length;i++){
            if(data[i].role===type)
                list.push(data[i])
        }
        console.log(list)
        return(list)
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
        this.get_data();
        this.extractor(this.state.data)
    }

    
    

  render() {

    
    if (this.state.login === false) {
        return <Redirect to='/login' />
    }


    console.log(this.state.clientlist.length)
    const data = [
        { name: "client", users: this.state.clientlist.length },
        { name: "employee", users: this.state.employeelist.length },
        { name: "supplies", users: this.state.clientlist.length },
      ];

    return (

        <section id="admin">
            <Sidebar />
            <div class="content">
                <Navbar />
                
                <div className="col-lg-12">
                <div style={{ textAlign: "center" }}>
                    <h1>USERS STATISTICS</h1>
                    <div className="App">
                        <PieChart width={400} height={400}>
                        <Pie
                            dataKey="users"
                            isAnimationActive={false}
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip />
                        </PieChart>
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 80,
                            bottom: 5,
                        }}
                        barSize={20}
                        >
                        <XAxis
                            dataKey="name"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                        </BarChart>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      );
  }
}

export default Form;
