import React, { Component } from 'react';

export default class Entree extends Component{
  render(){
    return (
      <ul>
        {this.props.entrees.map((entree, i) => {
            return(
              <li key={i}>{entree.name}</li>
            )
        })}
      </ul>
    )
  }
}
