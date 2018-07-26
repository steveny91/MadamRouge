import React, { Component } from 'react';
import RecipeTypes from './Types';
import RecipeList from './List';
import axios from 'axios';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


export default class Recipes extends Component {
  constructor(){
    super()
    this.state = {
      recipes: [],
      basestate: []
    };
    this.changeRecipes = this.changeRecipes.bind(this)
  };
  componentDidMount(){
    axios.get('http://localhost:8080/recipes')
    .then((response)=> {
      this.setState({basestate: response.data})
      this.changeRecipes("appetizer")
      }
    )
  };
  filterByType = (type) => {
    let recipesOfType = this.state.basestate.filter(function(recipe){
      return recipe.dish_type === type
    })
    return recipesOfType
  };
  changeRecipes = (type) => {
    this.setState({recipes: this.filterByType(type)})
  };
  render() {
    return (
      <div className="all-recipe-show">
        <div className="Recipes">
          <RecipeTypes changeRecipes={this.changeRecipes}/>
          <RecipeList recipes={this.state.recipes} changeRecipes={this.changeRecipes}/>
        </div>
      </div>
    );
  };
}
