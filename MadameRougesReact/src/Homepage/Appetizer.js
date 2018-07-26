import React, { Component } from 'react';

export default class Appetizer extends Component{
  render(){
    return (
      <ul>
        {this.props.apps.map((app, i) => {
            return(
              <li key={i}>{app.name}</li>
            )
        })}
      </ul>
    )
  }
}
