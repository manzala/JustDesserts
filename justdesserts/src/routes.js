import React from 'react';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

import Homepage from './Homepage';
import App from './App';
import Signup from './Signup';
import Profile from './Profile';
import blog from './blog';
import Search from './Search';

const Routes = () => (
  <Router>
   	<Route>
     	<div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={App} />
        <Route exact path="/Signup" component={Signup}/> 
        <Route exact path="/Profile" component={Profile}/> 
        <Route exact path="/Blog" component={blog}/>
        <Route exact path="/Search" component={Search}/>
    	</div>
  	</Route>
  </Router>
)


export default Routes