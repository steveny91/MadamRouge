import React, { Component } from 'react';

export default class AdminMenus extends Component{
  constructor(){
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(event){
    event.preventDefault()
    this.props.selectmenu(event.target.id)
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.allmenus.map(menu => <li id={menu.id} key={menu.id} onClick={this.clickHandler}>{menu.start_at}</li>)}
        </ul>
      </div>
    )
  }
}
