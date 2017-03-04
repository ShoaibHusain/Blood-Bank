import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import signup from './SignUp.js';
import login from './login.js';
import Home from './home.js';
import {Link} from 'react-router';
import * as firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var config = {
    apiKey: "AIzaSyAaJTcMyNxpyEHwsODm30S9aFcVK1uAWNY",
    authDomain: "react-project-312d2.firebaseapp.com",
    databaseURL: "https://react-project-312d2.firebaseio.com",
    storageBucket: "react-project-312d2.appspot.com",
    messagingSenderId: "258641628631"
  };
  firebase.initializeApp(config);

const style = {
  margin: 12,
  // margin-right: auto;
  // margin-left: auto;
  // align=c"enter",
};


class App extends Component {
  render() {
    return (
      // <nav class="navbar navbar-default">
        <MuiThemeProvider className="button">
          <div>
          <header>  
          <AppBar
    title="Blood Bank"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
          <Link to ="signup">
    <RaisedButton label="Signup" primary={true} style={style} /> </Link>
            <Link to = "login"> 
    <RaisedButton label="Login" primary={true} style={style} /></Link>
            {this.props.children}
            </header>
                  
            </div>
        </MuiThemeProvider>                      
    );
  }
}

export default App;
