import React, { Component } from 'react';
import axios from 'axios'

class ShowUser extends Component {
  constructor(){
    super()
    this.state = {
      recipes: [],
      user: null,
    }
  }
  componentDidMount(){
     axios.get('http://localhost:8080/users/4')
       .then((response)=>{

         this.setState({user: response.data.user, recipes: response.data.recipes})
       })
   }

  render() {
    let {username} = this.state.user? this.state.user : '';

    let {recipes} = this.state.recipes ? this.state.recipes : [];
    return (
      <div className="user-show-page">
        <p>Welcome {username}</p>
        {this.state.recipes.map(function(item, index){
          return <p key={ index }>{item.dish_type}: {item.name}</p>
        })}
      </div>
    );
  }
};

export default ShowUser;
