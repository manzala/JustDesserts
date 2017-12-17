import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

//import { Signup } from './Signup';
//import {App} from './App';

class Homepage extends Component{
  render(){ 
    return (
      <div className="Homepage">
        <meta name="viewport" content="width=device-width, initial-scale=1" />   
            <link rel="stylesheet" href="/bootstrap/bootstrap.min.css" />
            <title>Just Desserts</title> 
               <nav className="navbar navbar-light bg-light fixed-top" role="navigation">
          <h1>
            <a className="navbar-brand" href="/">
              <label>J</label>ust<span></span><label>D</label>esserts</a>
          </h1>
          <a className="btn btn-primary" href="./login">Sign In</a>
        </nav>
        <header className="masthead text-white text-center">
        <div className="overlay">
            <div className="container">
              <div className="row">
              <div className="col-xl-9 mx-auto">
                <div className ="bannerTitle">
                  <h2 className="mb-5">Looking for something sweet? </h2>
                </div>
              </div>
              <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                <form>
                  <div className="form-row">
                    <div className="col-12 col-md-9 mb-2 mb-md-0">
                      <input type="location" className="form-control form-control-lg" placeholder="Enter location..." />
                    </div>
                    <div className="col-12 col-md-3">
                      <button type="submit" className="btn btn-block btn-lg btn-primary">Find Dessert</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        </header>
        <div className="container">
          <h3> Finding desserts that fit your dietary needs has never been easier </h3>
          <div className="row">
            <div className="col-md-2" align="center">
              <img src="images/homepage/searchicon.png" style={{width: 100, height: 100}} alt="search icon" />
              <p> Search for a dessert based on your preferences </p>
            </div>
            <div className="col-md-3" align="center" style={{paddingTop: 50}}>
              <img src="/images/homepage/rightarrowicon.png" style={{width: 50, height: 50}} alt="right arrow icon" />
            </div>
            <div className="col-md-2" align="center">
              <img src="/images/homepage/cakeicon.png" style={{width: 100, height: 100}} alt="cake icon" />
              <p>Select your favorite dessert</p>
            </div>
            <div className="col-md-2" align="center" style={{paddingTop: 50}}>
              <img src="/images/homepage/rightarrowicon.png" style={{width: 50, height: 50}} alt= "right arrow icon" />
            </div>
            <div className="col-md-3" align="center">
              <img src="/images/homepage/figurewalkingicon.png" style={{width: 100, height: 100}} alt= "figure walking icon" />
              <p> Go out and enjoy your dessert!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Homepage