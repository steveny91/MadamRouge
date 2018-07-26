import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';


export default class RecipeList extends Component {

  render() {
    return (
      <div className="Recipe-list">
        {this.props.recipes.map((recipe, i) => {
          return (<div className="blocky float-left margin" key={i}><Link to={`/recipes/${recipe.id}`}> {recipe.name}</Link></div>)
        })}
      </div>
    );
  }
}
