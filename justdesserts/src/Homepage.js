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
            <link rel="stylesheet" href="Homepage.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossOrigin="anonymous" />
            <title>Just Desserts</title> 
               <nav className="navbar navbar-light bg-light fixed-top" role="navigation">
          <h1>
            <a className="navbar-brand" href="/">
              <label>J</label>ust<span></span><label>D</label>esserts</a>
          </h1>
          <a className="btn btn-primary" href="./login">Sign In</a>
        </nav>
        <header className="masthead text-white text-center">
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
        </header>
        <div className="container">
          <h3> Finding desserts that fit your dietary needs has never been easier </h3>
          <div className="row">
            <div className="col-md-2" align="center">
              <img src="https://maxcdn.icons8.com/Share/icon/Programming//search_property1600.png" style={{width: 100, height: 100}} />
              <p> Search for a dessert based on your preferences </p>
            </div>
            <div className="col-md-3" align="center" style={{paddingTop: 50}}>
              <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-chevron-right-128.png" style={{width: 50, height: 50}} />
            </div>
            <div className="col-md-2" align="center">
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/20200-200.png" style={{width: 100, height: 100}} />
              <p>Locate your favorite dessert</p>
            </div>
            <div className="col-md-2" align="center" style={{paddingTop: 50}}>
              <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-chevron-right-128.png" style={{width: 50, height: 50}} />
            </div>
            <div className="col-md-3" align="center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Q25443024_noun_35166_ccPierre-LucAuclair_to_walk.svg/819px-Q25443024_noun_35166_ccPierre-LucAuclair_to_walk.svg.png" style={{width: 100, height: 100}} />
              <p> Go out and enjoy your dessert!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Homepage;
