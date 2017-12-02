import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './blog.css';

class blog extends Component {
	render(){
		return (
			<div className= "blog"> 
				<div className="container">
					<div className="row">
						<h3> Blog </h3>
					</div>
				</div>
			</div>
			);
		}

	}


export default blog;