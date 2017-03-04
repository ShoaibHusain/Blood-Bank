import React, { Component } from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const style = {
  margin: 12,
};

class Login extends Component {

    constructor(props){
        super(props);
        this.login=this.login.bind(this)
    }

    login(ev) {
    ev.preventDefault();
   let email = this.refs.email.getValue();
    let password = this.refs.Password.getValue();

    console.log(email);
    console.log(password);

    firebase.auth().signInWithEmailAndPassword
(email,password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  // ...
})
        .then((user) => {
      let userDetails = {
           name: user.email,
           
           
         }
          console.log(user)
          console.log(user.uid)
          // var auth = true;
          // this.setState({
          //   auth: auth
          // })
         browserHistory.push('/home')

         console.log("logn success")
        //  firebase.database().ref('login/').push(userDetails)
  
    })
    
  }
    render(){
        return(
            <MuiThemeProvider>
             <div>

        <h1>Login</h1>

        <form onSubmit={this.login}>

        <div>
         <TextField
      hintText="Hint Text"
      floatingLabelText="Email"
      ref="email"
    /><br />
     <TextField
      hintText="Password Field"
      floatingLabelText="Password"
      type="password"
      ref="Password"
    /><br />

    <RaisedButton label="Login" type="submit" primary={true} style={style} />


           
        </div>            

        </form>

        </div>

        </MuiThemeProvider>

        )
       
    }
        
}


export default Login;
