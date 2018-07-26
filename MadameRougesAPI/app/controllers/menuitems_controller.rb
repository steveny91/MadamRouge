class MenuitemsController < ApplicationController

  def create
    menu_item = MenuItem.new(menu: Menu.find_by(id: params[:menu_id]), resipe: Recipe.find_by(id: params[:recipe_id]))
    if menu_item.save
      render json: menu_item
    else
      render status: 400
    end
  end

  def destroy
    recipe = Recipe.find_by(id: params[:recipe_id])
    menu = Menu.find_by(id: params[:menu_id])
    menu_item = MenuItem.find_by(menu: menu, recipe: recipe)
    id = menu_item.id
    menu_item.destroy
    render json: {id: id}

  end

end
