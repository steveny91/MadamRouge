import React, { Component } from 'react';

export default class Dessert extends Component{
  render(){
    return (
      <ul>
        {this.props.desserts.map((dessert, i) => {
            return(
              <li key={i}>{dessert.name}</li>
            )
        })}
      </ul>
    )
  }
}
