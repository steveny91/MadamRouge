import React, { Component } from 'react';
import axios from 'axios';
import Appetizer from './Appetizer';
import Salad from './Salad';
import Entree from './Entree';
import Dessert from './Dessert';
import {Button, Icon} from 'react-materialize';
import '../index.css';


export default class Homepage extends Component {
  constructor(){
    super()
    this.state = {
      app: [],
      salad: [],
      entree: [],
      dessert: [],
      start_at: '',
      end_at:''
    }
  }

filterMenuItem(menu, type){
    var filterItem = menu.filter(function findApps(recipe){
      return recipe.dish_type === type})
    return filterItem
  }

  componentDidMount(){
    axios.get('http://localhost:8080/')
    .then((response) => {
      let menu = response.data.menu_items
      this.setState(
        {
          app: this.filterMenuItem(menu,"appetizer"),
          salad: this.filterMenuItem(menu,"salad"),
          dessert: this.filterMenuItem(menu,"desserts"),
          entree: this.filterMenuItem(menu,"main course"),
          start_at: response.data.menu.start_at,
          end_at: response.data.menu.end_at
          })
    })

  }

  render() {
    return (
      <div className="home-bg">
        <div className="menu-card">
          <section className="menu-list">
            <h1>This Week's Menu </h1>
            <h2>Appetizer</h2>
              <Appetizer apps={this.state.app}/>
            <h2>Salad</h2>
              <Salad salads={this.state.salad}/>
            <h2>Entree</h2>
              <Entree entrees={this.state.entree}/>
            <h2>Dessert</h2>
              <Dessert desserts={this.state.dessert}/>
          </section>
          <h2 id="menu-period">Available from {this.state.start_at} to {this.state.end_at}</h2>
        </div>
      </div>
    );
  }
}
