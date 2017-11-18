import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import App from './App';
import Signup from './Signup';
import Search from './Search'

const Routes = () => (
  <Router>
   	<Route>
     	<div>
        <Route exact path="/" component={App} />
        <Route exact path="/Signup" component={Signup}/> 
        <Route exact payh="/Search" component={Search}>
     	</div>
  	</Route>
  </Router>
)


export default Routes