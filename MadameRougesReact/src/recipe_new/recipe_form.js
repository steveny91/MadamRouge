import React, { Component } from 'react';
import axios from 'axios';

export default class RecipeForm extends Component {
  constructor() {
    super()
    this.state = {
      ingredientsList: [],
      id: 0,
      ingredients: []
    }
    this.createRecipe = this.createRecipe.bind(this);
    this.addIngredient = this.addIngredient.bind(this)
  }

  addIngredient = () => {
    let newArray = this.state.ingredientsList;
    let id = this.state.id
    let axiosIngredients = this.state.ingredients
    newArray.push(id);
    id++
    axiosIngredients.push({
      amount: this.refs.amount.value,
      measurement: this.refs.measurement.value,
      item: this.refs.item.value
    })
    this.setState({ ingredientsList: newArray, ingredient: axiosIngredients, id: id })
  }

  createRecipe = (event) => {
    event.preventDefault();
    let axiosIngredients = this.state.ingredients
    axiosIngredients.push({
      amount: this.refs.amount.value,
      measurement: this.refs.measurement.value,
      item: this.refs.item.value
    })
    axios.post('http://localhost:8080/recipes', {
      recipe: {
        name: this.refs.name.value,
        dish_type: this.refs.dish_type.value,
        difficulty: this.refs.difficulty.value,
        directions: this.refs.directions.value,
        preptime: this.refs.preptime.value,
        user: {}
      }, ingredients: axiosIngredients
    })
      .then((response) => {
        if (response.status === 204) {
          this.props.history.push('/recipes');
        }
      }
      )
  }
  render() {
    return (
      <div className="container">
        <section id="recipe-box">
          <p id="recipe-box-title">Make a new recipe-form</p>
          <form id="recipe-form" onSubmit={this.createRecipe}>
            <label> Name:
            <input ref="name" type="text" />
            </label>
            <br />
            <div className="row">
              <div className="col s6">
                <label> Dish Type:
                <select ref="dish_type" name="DishType" className="browser-default">
                    <option value="appetizer">Appetizer</option>
                    <option value="salad">Salad</option>
                    <option value="main course">Main Course</option>
                    <option value="desserts">Desserts</option>
                  </select>
                </label>
              </div>

              <div className="col s6">
                <label> Difficulty:
                <select ref="difficulty" name="rec" className="browser-default">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </label>
              </div>
            </div>
            <br />
            <label> Directions:
            <textarea ref="directions" id="new-recipe" cols="30" rows="5" maxLength="140" name="recipe"></textarea>
            </label>
            <br />
            <label> Preparation Time:
            <input ref="preptime" type="text" />
            </label>
            <br />
            <div>
              <label>Ingredient:
                <br />
                <label>Amount:
                    <input ref="amount" type="text" />
                </label>
                <label>Measurement:
                  <input ref="measurement" type="text" />
                </label>
                <label>Item:
                  <input ref="item" type="text" />
                </label>
              </label>
            </div>
            <br />
            {this.state.ingredientsList.map((id, i) => {
              return (
                <div key={i}>
                  <label>Ingredient:
                      <br />
                    <label>Amount:
                          <input ref="amount" type="text" />
                    </label>
                    <label>Measurement:
                        <input ref="measurement" type="text" />
                    </label>
                    <label>Item:
                        <input ref="item" type="text" />
                    </label>
                  </label>
                </div>)
            }
            )
            }
            <button className="btn btn-primary" type="button" onClick={this.addIngredient}>Add More Ingredients</button>
            <br />
            <br />
            <br />
          </form>
        </section>
        <input className="btn btn-primary" type="submit" value="Make a new recipe" />
      </div>
    );
  }
}
