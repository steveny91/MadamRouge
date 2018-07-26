class RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    @ingredients = @recipe.ingredients.order(:item_id)
    @user = @recipe.user
    @items = []

    @ingredients.each do |ing|
      @items << {amount: ing.amount, measurement: ing.measurement, name: (Item.find(ing.item_id)).name}
    end

    @recetta = {recipe: @recipe, ingredients: @ingredients, user: @recipe.user.username, items: @recipe.items.order(:id) }
    render json: @recetta
  end


  def create
    @recipe = Recipe.new
    @recipe.name = params[:recipe][:name]
    @recipe.dish_type = params[:recipe][:dish_type]
    @recipe.difficulty = params[:recipe][:difficulty]
    @recipe.directions = params[:recipe][:directions]
    @recipe.preptime = params[:recipe][:preptime]
    @recipe.user = current_user
    @recipe.save

    params[:ingredients].each do | ingredient |
      if (Item.find_by(name: ingredient[:item]))
        @item = Item.find_by(name: ingredient[:item])
      else
         @item = Item.new
         @item.name = ingredient[:item]
         @item.save
      end
      ing = Ingredient.new
      ing.amount = ingredient[:amount]
      ing.measurement = ingredient[:measurement]
      ing.recipe = @recipe
      ing.item =@item
      ing.save
    end
  end

end
