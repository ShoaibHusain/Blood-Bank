import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import  Signup  from './SignUp';
import  Home from './home';
import Login from './login.js';
import {Router,browserHistory,Route} from 'react-router'




ReactDOM.render(

  <Router history={browserHistory}>
 <Route path="/" component={ App }>
  <Route path="signup" component={Signup}></Route>
  <Route path="login" component={Login}></Route>
  </Route>
  <Route path="home" component={Home}></Route>
   <Route></Route>

  
  </Router>,
//   </div>,
   document.getElementById('root')
);

// ReactDOM.render(
//   <div>
//   <Router history="browserHistory">
//   <Route path="/" component={SignUp}></Route>
//   <Route></Route>
//   <Route></Route>
  
//   </Router>
//   </div>,
//   document.getElementById('root')
// );
