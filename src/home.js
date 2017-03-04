import React, { Component } from 'react';
import * as firebase from 'firebase';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};

class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            array:[]
        }
        this.login= this.login.bind(this)
    }
    login(){
    firebase.database().ref().child("users").on("value",(snapshot)=>{
        var dbarr = [];
        dbarr.push(snapshot.val())

        this.setState({
        array:dbarr
    })
    })
    
    }
  render() {

    return (
        <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
      // <nav class="navbar navbar-default">
      <div>
        <button onClick = {this.login}>Click</button>    
       <div> {this.state.array.map((val,i)=>{
                  return(
                      <li key={i}>{val}</li>
                  )     
       })}
       </div>
       </div>
    );
  }
}

export default Home;