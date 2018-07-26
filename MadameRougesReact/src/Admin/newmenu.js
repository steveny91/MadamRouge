import React, { Component } from 'react';
import axios from 'axios';

export default class MenuForm extends Component {
  constructor(){
    super()
    this.state =  {
      menuItems: [],
      appetizers: [],
      salads: [],
      entrees: [],
      desserts: [],
      menuAppetizers: [],
      menuSalads: [],
      menuEntrees: [],
      menuDesserts: []
    }
    this.addMenuItem = this.addMenuItem.bind(this);
    this.createMenu = this.createMenu.bind(this);
  }
  filterRecipes(recipes, type){
    var filteredRecipe = recipes.filter(function findType(recipe){
      return recipe.dish_type === type
      }
    )
    return filteredRecipe
  };
  componentDidMount(){
    axios.get('http://localhost:8080/recipes')
    .then((response) => {
      let recipes = response.data
      this.setState({
          appetizers: this.filterRecipes(recipes,"appetizer"),
          salads: this.filterRecipes(recipes,"salad"),
          desserts: this.filterRecipes(recipes,"desserts"),
          entrees: this.filterRecipes(recipes,"main course")
          }
        )
      }
    )
  }
  addMenuItem(type){
    switch(type){
      case "appetizer":
              let appetizers = this.state.menuAppetizers;
              appetizers.push({menu_item: this.refs.appetizer.value});
              this.setState({menuAppetizers: appetizers });
              break;
      case "salad":
              let salads = this.state.menuSalads;
              salads.push({menu_item: this.refs.salad.value});
              this.setState({menuSalads: salads })
              break;
      case "entree":
              let entrees = this.state.menuEntrees;
              entrees.push({menu_item: this.refs.entree.value});
              this.setState({menuEntrees: entrees })
              break;
      case "dessert":
              let desserts = this.state.menuDesserts;
              desserts.push({menu_item: this.refs.dessert.value});
              this.setState({menuDesserts: desserts })
    }
  }

  createMenu(event){
    event.preventDefault();
    let axiosMenuItems1 = this.state.menuAppetizers.concat(this.state.menuSalads);
    let axiosMenuItems2 = this.state.menuEntrees.concat(this.state.menuDesserts)
    let axiosMenuItems = axiosMenuItems1.concat(axiosMenuItems2)
    axiosMenuItems.push({menu_item: this.refs.appetizer.value})
    axiosMenuItems.push({menu_item: this.refs.salad.value})
    axiosMenuItems.push({menu_item: this.refs.entree.value})
    axiosMenuItems.push({menu_item: this.refs.dessert.value})
    axios.post('http://localhost:8080/menus', {menu: {start_at: this.refs.start_at.value},menu_items: axiosMenuItems})
    .then((response)=>{
      if (response.status === 204) {
        this.props.history.push('/admin');
        }
      }
    )
  }
  render() {
    return (
      <section>
        <p>Make a new menu</p>
        <form id="menu-form" onSubmit={this.createMenu}>
          <label> Starts at:
            <input ref="start_at" type="date" />
          </label>
          <br/>
          <div className="row">
            <div className="col s3">
              <br/>
              <label> Appetizers:
                <select ref="appetizer"  className="browser-default">
                  {this.state.appetizers.map((appetizer,i) => {
                    return (<option key={i} value={appetizer.name}>{appetizer.name}</option> )
                  }
                )
              }
                </select>
                <br/>
                {this.state.menuAppetizers.map((something, i)=> {
                  return (
                    <div>
                      <select ref="appetizer"  className="browser-default">
                        {this.state.appetizers.map((appetizer,i) => {
                          return (<option value={appetizer.name}>{appetizer.name}</option> )
                            }
                          )
                        }
                      </select>
                      <br/>
                    </div>)
                    }
                  )
                }
              </label>
              <button className="btn btn-primary" type="button" onClick={() =>{this.addMenuItem("appetizer")}}>Add Appetizer</button>
            </div>
            <div className="col s3">
              <br/>
              <label> Salads:
                <select ref="salad"  className="browser-default">
                  {this.state.salads.map((salad,i) => {
                    return (<option key={i} value={salad.name}>{salad.name}</option> )
                  }
                )
              }
                </select>
                <br/>
                {this.state.menuSalads.map((something, i)=> {
                  return (
                    <div>
                      <select ref="salad"  className="browser-default">
                        {this.state.salads.map((salad,i) => {
                          return (<option value={salad.name}>{salad.name}</option> )
                            }
                          )
                        }
                      </select>
                      <br/>
                    </div>)
                    }
                  )
                }
              </label>
              <button className="btn btn-primary" type="button" onClick={() =>{this.addMenuItem("salad")}}>Add Salad</button>
            </div>
            <div className="col s3">
              <br/>
              <label> Entrees:
                <select ref="entree"  className="browser-default">
                  {this.state.entrees.map((entree,i) => {
                    return (<option key={i} value={entree.name}>{entree.name}</option> )
                  }
                )
              }
                </select>
                <br/>
                {this.state.menuEntrees.map((something, i)=> {
                  return (
                    <div>
                      <select ref="entree"  className="browser-default">
                        {this.state.entrees.map((entree,i) => {
                          return (<option value={entree.name}>{entree.name}</option> )
                            }
                          )
                        }
                      </select>
                      <br/>
                    </div>)
                    }
                  )
                }
              </label>
              <button className="btn btn-primary" type="button" onClick={() =>{this.addMenuItem("entree")}}>Add Entree</button>
            </div>
            <div className="col s3">
              <br/>
              <label> Desserts:
                <select ref="dessert"  className="browser-default">
                  {this.state.desserts.map((dessert,i) => {
                    return (<option key={i} value={dessert.name}>{dessert.name}</option> )
                  }
                )
              }
                </select>
                <br/>
                {this.state.menuDesserts.map((something, i)=> {
                  return (
                    <div>
                      <select ref="dessert"  className="browser-default">
                        {this.state.desserts.map((dessert,i) => {
                          return (<option value={dessert.name}>{dessert.name}</option> )
                            }
                          )
                        }
                      </select>
                      <br/>
                    </div>)
                    }
                  )
                }
              </label>
              <button className="btn btn-primary" type="button" onClick={() =>{this.addMenuItem("dessert")}}>Add Dessert</button>
            </div>
          </div>

          <br/>
          <br/>

            <input className="btn btn-primary " type="submit" value="Make a new menu"/>

        </form>
      </section>
    );
  }
}
