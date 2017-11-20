
import React, { Component } from 'react';
import cupcake from './images/cupcake.png'
import './App.css';

class Signup extends Component {

constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
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
    const { firstName, lastName, email, password } = this.state 
    
    console.log('in handleClick');
    console.log(this.state);

    fetch('/api/sign-up', {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
      headers: {
        "Content-Type":"application/json"
      }})
    .then(response => response.json())
    .then(body => console.log(body)).catch(()=> console.log("EOROROROR"))
  }

  render() { 
    return (
        <div className="Signup">
            <div className = "loginBox">
                <div className = "glass">
                    <img src={cupcake} className ="user" />
                    <h3>Signup Here!</h3>
                    <form onSubmit={this.handleClick}>
                        <div className = "inputBox">
                            <input type="text" name="firstName" placeholder="firstName" onChange={(e) => this.handleChange(e.target.value, 'firstName')}/>
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="text" name="lastName" placeholder="lastName" onClick={(e) => this.handleChange(e.target.value, 'lastName')}/>
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="text" name="email" placeholder="email" onChange={(e) => this.handleChange(e.target.value, 'email')} />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="password" name="password" placeholder="password" onChange={(e) => this.handleChange(e.target.value, 'password')}/>
                            <span><i className="fa fa-lock" aria-hidden="true"></i></span>
                        </div>
                        <input type="submit" value="Signup"/>
                    </form>
                    
                </div>
            </div>
        </div>
    );
  }
}

export default Signup
