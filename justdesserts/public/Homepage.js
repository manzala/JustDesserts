import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

//import { Signup } from './Signup';
import {App} from './App';

class Homepage extends Component{
  render(){ 
    return (
      <div className="Homepage">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Just Desserts</title> 
                 <main className="header">
                     <h1> Just Desserts</h1>
                    <hr className="line" />
                    <h2>Closing the Sugar Gap </h2>  
                  </main>
            <figcaption>
               <ul>
                <Link to='./login'>Sign In </Link> 
                <Link to='#'>    Search</Link>
              </ul>
          </figcaption>
          </div>
      );
   }
}

export default Homepage;
