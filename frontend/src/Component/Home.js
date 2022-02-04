import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import Footer from "./Footer"
import Header from "./Header"


const cookies = new Cookies();

class Home extends Component {
  constructor(){
    super();

    this.state ={
        login: false,
        badpassword : false
    };
  }

  

  render() {
    if (this.state.login === true) {
      return <Redirect to='/' />
    }

    return (
        <section>
          <Header />
          <h1 class="display-1">CONTACT MANAGER APP</h1>
          <section className="login-form py-md-5 py-3">
          <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>Full Width Backgrounds</h2>
                        <p className="lead">A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
                        <p className="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
                    </div>
                </div>
            </div>
        </section>
        <div className="py-9 bg-image-full">
        <div style={{height: 20}}></div>
        </div>
        <section className="py-5">
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2>Engaging Background Images</h2>
                        <p className="lead">The background images used in this template are sourced from Unsplash and are open source and free to use.</p>
                        <p className="mb-0">I can't tell you how many people say they were turned off from science because of a science teacher that completely sucked out all the inspiration and enthusiasm they had for the course.</p>
                    </div>
                </div>
            </div>
        </section>
          </section>
          <Footer />
      </section>
      );
  }
}

export default Home;
