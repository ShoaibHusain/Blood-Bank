import React, { Component } from 'react';
import * as firebase from 'firebase'
import {browserHistory} from 'react-router'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const style = {
  margin: 12,
};

class Signup extends Component {

 constructor(props){
  super(props);
  this.signup=this.signup.bind(this)
 }

    signup(e) {
            e.preventDefault();
            let name = this.refs.name.getValue();
            let email = this.refs.email.getValue();
            let pass = this.refs.Password.getValue();
            console.log(name, email, pass)

          
            firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((user)=>{
                let userDetails ={
                    useremail:user.email

                }
                  browserHistory.push('/login')

                firebase.database().ref("users/"+user.uid).set(userDetails)
            })
            .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
            
            // alert("")
        }

    render(){
        
        return(
            <MuiThemeProvider>
        <div className="button">

        <h1>Signup</h1>

        <form onSubmit={this.signup}>

        <div>
            <TextField
      hintText="Hint Text"
      floatingLabelText="Name"
      ref="name"
    /><br />
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
    <RaisedButton label="Signup" type="submit" primary={true} style={style} />

    
           
        </div>            
         
        </form>

        </div>
        </MuiThemeProvider>
        )
    }
}


export default Signup ;
