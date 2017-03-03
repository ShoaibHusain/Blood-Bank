import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import signup from './SignUp.js';
import login from './login.js';
import {Link} from 'react-router';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAaJTcMyNxpyEHwsODm30S9aFcVK1uAWNY",
    authDomain: "react-project-312d2.firebaseapp.com",
    databaseURL: "https://react-project-312d2.firebaseio.com",
    storageBucket: "react-project-312d2.appspot.com",
    messagingSenderId: "258641628631"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div>
        <header><h1>Blood Bank</h1>

       <Link to ="signup"> <button>Signup</button></Link>
        <Link to = "login"> <button>Login</button></Link>
        {this.props.children}
        </header>
        

        </div>
        
        
        
             
    );
  }
}

export default App;
