import React, { Component } from 'react';
import {Tab, Tabs, TabList} from 'react-tabs';

export default class RecipeTypes extends Component {
  constructor (){
    super();
    this.state = {
      types: ["appetizer", "salad", "main course", "desserts"]
    }
  }
  render() {
    return (
      <Tabs>
      <div className="Recipe-types">
        <TabList id="tabular" className= "remove-border">
        {this.state.types.map((type, i) => {
          return <Tab className="remove-border"><a key={i} onClick={() => {this.props.changeRecipes(type)}}> {type}</a></Tab>
        })}
      </TabList>
      </div>
    </Tabs>
    );
  }
}
