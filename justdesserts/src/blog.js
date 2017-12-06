import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './blog.css';

class blog extends Component {
	render(){
		return (
			<div>
        <title>W3.CSS Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://www.w3schools.com/lib/w3-theme-blue-grey.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
            <a className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" href="javascript:void(0);" onclick="openNav()"><i className="fa fa-bars" /></a>
            <a href="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4"><i className="fa fa-home w3-margin-right" />Just Desserts</a>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News"><i className="fa fa-globe" /></a>
            <div className="w3-dropdown-hover w3-hide-small">
              <button className="w3-button w3-padding-large" title="Notifications"><i className="fa fa-bell" /></button>     
              <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{width: 300}}>
         
              </div>
            </div>
            <a href="#" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account"><img src="" className="w3-circle" style={{height: 25, width: 25}}  /></a>
          </div>
        </div>
        {/* Navbar on small screens */}
        <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium w3-large">
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 1</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 2</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">Link 3</a>
          <a href="#" className="w3-bar-item w3-button w3-padding-large">My Profile</a>
        </div>
        {/* Page Container */}
        <div className="w3-container w3-content" style={{maxWidth: 1400, marginTop: 80}}>    
          {/* The Grid */}
          <div className="w3-row">
            {/* Left Column */}
            <div className="w3-col m3">
              {/* Profile */}
              <div className="w3-card w3-round w3-white">
                <div className="w3-container">
                  <h4 className="w3-center">My Profile</h4>
                  <p className="w3-center"><img src="" className="w3-circle" style={{height: 106, width: 106}} alt="" /></p>
                  <hr />      
                </div>
              </div>
              <br />
              {/* Accordion */}
              <div className="w3-card w3-round">
                <div className="w3-white">
                  <button onclick="myFunction('Demo3')" className="w3-button w3-block w3-theme-l1 w3-left-align"><i className="fa fa-users fa-fw w3-margin-right" /> My Posts</button>
                  <div id="Demo3" className="w3-hide w3-container">
                    <div className="w3-row-padding">
                      <br />
                      <div className="w3-half">
                        <img src="" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="/w3images/forest.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="/w3images/nature.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                      <div className="w3-half">
                        <img src="/w3images/fjords.jpg" style={{width: '100%'}} className="w3-margin-bottom" />
                      </div>
                    </div>
                  </div>
                </div>      
              </div>
              <br />
              

              {/* End Left Column */}
            </div>
            {/* Middle Column */}
            <div className="w3-col m7">
              <div className="w3-row-padding">
                <div className="w3-col m12">
                  <div className="w3-card w3-round w3-white">
                    <div className="w3-container w3-padding">
                      <h6 className="w3-opacity">Just Desserts Posts</h6>
                      <p contentEditable="true" className="w3-border w3-padding">Status: </p>
                      <button type="button" className="w3-button w3-theme"><i className="fa fa-pencil" /> &nbsp;Post</button> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="w3-container w3-card w3-white w3-round w3-margin"><br />
                <img src="/w3images/avatar2.png" alt="" className="w3-left w3-circle w3-margin-right" style={{width: 60}} />
                
                <hr className="w3-clear" />
                <div className="w3-row-padding" style={{margin: '0 -16px'}}>
                  <div className="w3-half">
                    <img src="" style={{width: '100%'}} alt="" className="w3-margin-bottom" />
                  </div>
                  <div className="w3-half">
                    <img src="" style={{width: '100%'}} alt="" className="w3-margin-bottom" />
                  </div>
                </div>
                <button type="button" className="w3-button w3-theme-d1 w3-margin-bottom"><i className="fa fa-thumbs-up" /> &nbsp;Like</button> 
                <button type="button" className="w3-button w3-theme-d2 w3-margin-bottom"><i className="fa fa-comment" /> &nbsp;Comment</button> 
              </div>
            
              {/* End Middle Column */}
            </div>
       
            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
        <br />
        {/* Footer */}
        
      </div>
			);
		}

	}


export default blog;