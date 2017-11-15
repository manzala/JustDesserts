
import React, { Component } from 'react';
import cupcake from './images/cupcake.png'
import './App.css';

class Signup extends Component {

  handleClick(event) {
    fetch('/api/sign-up', {method: 'GET'}).then(res => res.json()).then(body => console.log(body));
  }

  render() { 
    return (
        <div className="Signup">
            <div className = "loginBox">
                <div className = "glass">
                    <img src= { cupcake} className = "user" />
                    <h3>Signup Here!</h3>
                    <form>
                     <div className = "inputBox">
                            <input type="text" name="firstName" placeholder="First Name" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                         <div className = "inputBox">
                            <input type="text" name="lastName" placeholder="Last Name" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="text" name="email" placeholder="Email" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="password" name="password" placeholder="Password" />
                            <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <input type="submit" name="" value="Login" onClick={this.handleClick}/>
                    </form>
                    
                </div>
            </div>
        </div>
    );
  }
}

export default Signup
