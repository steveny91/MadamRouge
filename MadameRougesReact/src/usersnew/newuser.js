import React, { Component } from 'react';
import axios from 'axios';
import querystring from 'querystring';
import {Link, Redirect} from 'react-router-dom'
export default class NewUser extends Component {
  constructor(){
    super()
    this.createUser = this.createUser.bind(this);
   }

   createUser(e){
     e.preventDefault();
     axios.post('http://localhost:8080/users',
     {user:{username:this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value} }  )
     .then((response) => {
       if (response.status=== 200) {
         sessionStorage.setItem("userId", response.data.id);
         this.props.history.push('/');
       }
     }
   )
   .catch((error) => {
     alert("Something went wrong. Call IT!!!")
   })
   }

  render() {
    return (
      <div className="new-user">
        <div className="new-user-form">
        <form onSubmit={this.createUser} >
          <div className="Input">
            <label htmlFor="username">Username</label>
            <input ref="username" className="username-signup" required type="text" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input ref="email" className="email-signup" required type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input ref="password" className="password-signup" required type="password" />
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">Register</button>
				</form>
      </div>
      </div>
    );
  }
}
// {user:{username:this.refs.username.value, email: this.refs.email.value, password: this.refs.password.value}}
// {user:{username:,
// this.refs.username.value
// this.refs.email.value
// this.refs.password.value
