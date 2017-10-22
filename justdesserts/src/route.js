import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Signup from './Signup';

const BasicExample = () => (
  <Router>
   	<Route>
   	<div>

      <Route path="/Signup" component={Signup}/>
  	</div>
  	</Route>
  </Router>
)


export default BasicExample