import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class profile extends Component {
render(){
return(
<div>
	<div className="Profile">
	  <header className="container">
	  		<div className="row">
	  			<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	        		<div class="page-heading">
	          			 <h2> Profile</h2>
	          		</div>
	        	</div>
	  		</div>
	  </header>	
	</div>


	  <div className="container">
	  	<div className="row">
	  		<div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
	         <h3> Posts </h3>
	        </div>
	  	</div>
	  </div>	

</div>

	);
  }
} 
export default profile 