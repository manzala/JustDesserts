import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import Homepage from './Homepage';
import App from './App';
import Signup from './Signup';
import profile from './profile';

const Routes = () => (
  <Router>
   	<Route>
     	<div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={App} />
        <Route exact path="/Signup" component={Signup}/> 
        <Route exact path="/profile" component={profile}/> 
    	</div>
  	</Route>
  </Router>
)


export default Routes