import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './App.css';


class App extends Component {
constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
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
    
    console.log('printing state....');
    console.log(this.state);

    fetch('/api/login', {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type":"application/json"
      },
      credentials: 'include',
    })
    .then(response => { 

      if(response.status >= 400) {
        console.log('ERROR logging in');
        return;
      } else {
        this.setState({ isLoggedIn: true })
        return response.json();
      }
      
    })
    .then(body => console.log(body)).catch(()=> console.log("AGAIN ERROR"))
  }
  

  render() {
    if(this.state.isLoggedIn) {
      return <Redirect to="/blog" />;
    }

    return (
      <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
        <div className = "loginBox">
          <div className = "glass">
            <img src="/images/glassbox/cupcake.png" className = "user" />
              <h3>Sign in Here</h3>
                <form onSubmit={this.handleClick}>
                      <div className = "inputBox">
                         <input type="text" name="email" placeholder="Email" onChange={(e) => this.handleChange(e.target.value, 'email')}/>
                        <span><i className="fa fa-user" aria-hidden="true"></i></span>
                      </div>
                          <div className = "inputBox">
                              <input type="password" name="password" placeholder="Password" onChange={(e) => this.handleChange(e.target.value, 'password')}/>
                          <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                      </div>
                      <div>
                      </div>
                   <input type="submit" name="" value="Login" onClick={(e)=> this.handleClick}/>
               </form>
            <a href= "#">Forgot Password?</a>
                <br />
            <Link to='/Signup'>Signup</Link>    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
