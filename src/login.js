import React, { Component } from 'react';
import * as firebase from 'firebase';
import {browserHistory} from 'react-router'
class Login extends Component {

    constructor(props){
        super(props);
        this.login=this.login.bind(this)
    }

    login(ev) {
    ev.preventDefault();
    console.log(this.refs.email.value);
    console.log(this.refs.Password.value);
   let email = this.refs.email.value;
    let password = this.refs.Password.value;
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
         browserHistory.push('/signup')

         console.log("logn success")
         firebase.database().ref('login/').push(userDetails)
  
    })
    
  }
    render(){
        return(
             <div>

        <h1>Login</h1>

        <form onSubmit={this.login}>

        <div>
            <label>Email</label><br />
            <input type="email" ref="email" /><br /><br />
            <label>Password</label><br />
            <input type="password" ref="Password" /><br /><br />
            <button>Login</button>
        </div>            

        </form>

        </div>
        )
       
    }
        
}


export default Login;
