import React, { Component } from 'react';
import AdminMenus from './adminmenus';
import AdminCurrentMenu from './currentmenu';
import axios from 'axios';

export default class AdminShow extends Component{
  constructor(){
    super()
    this.state = {
      allmenus: [],
      currentmenu: [],
      activemenu: [],
      activemenuId: null
    };
    this.onMenuClick = this.onMenuClick.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

onMenuClick(id){
  axios.get(`http://localhost:8080/menus/`+id)
  .then((response) => {
    let activemenu = response.data.menu_items.map(function(item){
      return {id: item.id, name: item.name}
      }
    );
    this.setState({ activemenu: activemenu, activemenuId: response.data.menu.id});
    }
  )
}

componentDidMount(){
  axios.get('http://localhost:8080')
  .then((response) => {
    let currentmenu = response.data.menu_items.map(function(item){
      return {id: item.id, name: item.name, dish_type: item.dish_type}
    })
    this.setState(
      { currentmenu: currentmenu, activemenu: currentmenu, activemenuId: response.data.menu.id }
    )
  })

  axios.get('http://localhost:8080/madame')
    .then((response) => {
      let allmenus = response.data.map(function(menu) {
        return {id: menu.id, start_at: menu.start_at }
      })
      this.setState(
        { allmenus: allmenus}
      )
    })
  }

  removeItem(id){
    axios({
      method: "delete",
      url: 'http://localhost:8080/menuitems/'+this.state.activemenuId,
      params: {
        recipe_id: id,
        menu_id: this.state.activemenuId
      }
    })
    .then((response) => {
      let newActive = this.state.activemenu.filter(function(menuItem){
        if (menuItem.id != id) {
          return menuItem
        }
      })
      this.setState({ activemenu: newActive })
    })
  }

  render() {
    return (
      <div className="admin-show">
        <h1>Welcome, Madame Rouge</h1>
        <div id="admin_current_menu">
          <p><i>Current Menu</i></p>
          <AdminCurrentMenu handleClick={this.removeItem} menus={this.state.activemenu} />
        </div>

        <div id="admin_menus">
          <p><i>Weekly Menu History</i></p>
          <AdminMenus selectmenu={this.onMenuClick} allmenus={this.state.allmenus}/>
        </div>
      </div>
    );
  }
}
