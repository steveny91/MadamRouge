import React, { Component } from 'react';
import { Link }  from 'react-router-dom';


export default class AdminCurrentMenu extends Component{
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(event){
    event.preventDefault();
    this.props.handleClick(event.target.id)
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.menus.map((recipe, i) =>
            <li key={i}>
              <Link to={`/recipes/${recipe.id}`}>
                {recipe.name}
              </Link>
              <a onClick={this.clickHandler} id={recipe.id} className="btn-floating red make-smaller"> - </a>
            </li>)}
        </ul>
      </div>
    )
  }
}
