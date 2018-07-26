import React, { Component } from 'react';

export default class Salad extends Component{
  render(){
    return (
      <ul>
        {this.props.salads.map((salad, i) => {
            return(
              <li key={i}>{salad.name}</li>
            )
        })}
      </ul>
    )
  }
}
