import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cupcake from './images/cupcake.png';
import './App.css';

import { Signup } from './Signup'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "loginBox">
          <div className = "glass">
            <img src= {cupcake} className = "user" />
            <h3>Sign in Here</h3>
            <form>
                <div className = "inputBox">
                  <input type="text" name="email" placeholder="Email" />
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                </div>
                <div className = "inputBox">
                  <input type="password" name="password" placeholder="Password" />
                  <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                </div>
                <input type="submit" name="" value="Login" />
            </form>
            <Link to='/Recover'>Forgot Password?</Link>
            <Link to='/Signup'>Signup??</Link>    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
