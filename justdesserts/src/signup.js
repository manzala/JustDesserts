import React, { Component } from 'react';
import cupcake from './images/cupcake.png'
import './App.css';

class Signup extends Component {
  render() { 
    return (
        <div className="Signup">
            <div className = "loginBox">
                <div className = "glass">
                    <img src= { cupcake} className = "user" />
                    <h3>Signup Here!</h3>
                    <form>
                        <div className = "inputBox">
                            <input type="text" name="email" placeholder="email" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="password" name="password" placeholder="password" />
                            <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <input type="submit" name="" value="Login" />
                    </form>
                   <a href="#">Login!</a>  
                </div>
            </div>
        </div>
    );
  }
}

export default Signup
