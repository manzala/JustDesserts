import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import cupcake from './images/cupcake.png';
import './App.css';

import { Profile } from './profile'

class App extends Component {
constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, fieldName) {
    this.setState({ [fieldName]: value });

  }

  
  handleClick(event) {
    event.preventDefault();
    const { email, password } = this.state
  }

  render() {
    return (
      <div className="App">
        <div className = "loginBox">
          <div className = "glass">
            <img src= {cupcake} className = "user" />
              <h3>Sign in Here</h3>
                <form  onSubmit={this.handleClick}>
                      <div className = "inputBox">
                         <input type="text" name="email" placeholder="email" onChange={(e) => this.handleChange(e.target.value, 'email')}/>
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                          <div className = "inputBox">
                              <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e.target.value, 'password')}/>
                          <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                      </div>
                      <div>
                      <label><input type="checkbox" /> Rember Me</label>
                      </div>
                   <input type="submit" name="" value="Login" />
               </form>
            <a href= "#">Forgot Password?</a>
                <br />
            <Link to='/Signup'>Signup??</Link>    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
