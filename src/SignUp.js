import React, { Component } from 'react';
import * as firebase from 'firebase'


class Signup extends Component {

 constructor(props){
  super(props);
  this.signup=this.signup.bind(this)
 }

    signup(e) {
            e.preventDefault();
            let name = this.refs.name.value;
            let email = this.refs.email.value;
            let pass = this.refs.Password.value;
            console.log(name, email, pass)
            firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then((user)=>{
                let userDetails ={
                    useremail:user.email

                }
                firebase.database().ref("user/").push(userDetails)
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
        <div>

        <h1>Signup</h1>

        <form onSubmit={this.signup}>

        <div>
            <label>Name</label><br/>
            <input type="text" ref="name" /><br/> <br />
            <label>Email</label><br/>
            <input type="email" ref="email" /><br/><br />
            <label>Password</label><br/>
            <input type="password" ref="Password" /><br/><br />
            <button >Signup</button>
        </div>            
         
        </form>

        </div>
        )
    }
}


export default Signup ;
