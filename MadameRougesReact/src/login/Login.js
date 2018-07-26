import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
  constructor(){
    super()
    this.login = this.login.bind(this);
  }

  login(e){
    e.preventDefault();
    axios.post('http://localhost:8080/sessions',
    {user:{email: this.refs.email.value, password: this.refs.password.value}})
    .then((response) => {
      if (response.status === 200) {
        sessionStorage.setItem("userId", response.data.id);
        this.props.history.push("/users/" + response.data.id)
      }
    })
    .catch((error) =>{
      alert(error + "\n \n Are you sure that's the right email/password?");
    })
  }

  render() {
    return (
      <div className="user-log-bg">
        <div className="user-login-form">
        <form onSubmit={this.login} >
          <div>
            <input ref="email" className="email-login" required type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input ref="password" className="password-login" required type="password" />
            <label htmlFor="password">Password</label>
          </div>
          <input className="btn btn-primary" type="submit" value="Log in" />
        </form>
      </div>
      </div>
    );
  }
}
