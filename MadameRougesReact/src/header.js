import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import './App.css'
import axios from 'axios'
class Header extends Component {
  logOut(){
    debugger
    axios.get('http://localhost:8080/logout')
    .then((response) =>{
      sessionStorage.clear()
      }
    )
  }
  render() {

      if(sessionStorage.length === 0 ){

        return (
          <header>
            <Navbar brand='Madame Rouge' right className="transparent z-depth-0">
        	     <NavItem href='/recipes'>Recipes</NavItem>
        	      <NavItem href='/users/new'>Signup</NavItem>
                <NavItem href='/sessions/new'>Login</NavItem>
              </Navbar>
          </header>
        );
      }
      else{
      return (
          <header>
            <Navbar brand='Madame Rouge' right className="transparent z-depth-0">
              <NavItem href='/recipes'>Recipes</NavItem>
              <NavItem href={`/users/${sessionStorage.userId}`}>Profile</NavItem>
              {/* Future feature */}
              <NavItem onClick={this.logOut} href="/">Log Out</NavItem>
              <NavItem href="/recipes/new">New Recipe</NavItem>
            </Navbar>
          </header>
      );
    }
  }
}

export default Header;
