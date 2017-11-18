
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

  handleChange(event) {
    const fieldName = event.target.name;
    this.setState({ [fieldName]: event.target.value });
  }


  handleClick(event) {
   console.log('in handleClick');
    console.log(this.state);
    fetch('/api/sign-up', {
      method: "POST",
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
      }),
      headers: {
        "Content-Type": "application/json"
      }})
      .then(response => response.json())
      .then(body => console.log(body))

    event.preventDefault();
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
                            <input type="text" name="firstName" placeholder="firstName" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="text" name="lastName" placeholder="lastName" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="text" name="email" placeholder="email" />
                            <span><i className="fa fa-user" aria-hidden="true"></i></span>
                        </div>
                        <div className = "inputBox">
                            <input type="password" name="password" placeholder="password" />
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
