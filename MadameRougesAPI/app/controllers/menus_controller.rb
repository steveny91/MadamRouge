class MenusController < ApplicationController
  def index
    @menu = Menu.current

    # @menu.start_at = @menu.start_at.strftime("%m/%d/%Y")
    # @menu.end_at = @menu.end_at.strftime("%m/%d/%Y")

    @menu_hash = {end_at: @menu.end_at.strftime("%m/%d/%Y"), start_at: @menu.start_at.strftime("%m/%d/%Y"), id: @menu.id}
    @info = []
    @menu.menu_items.each do |item|
      @info << Recipe.find(item.recipe_id)
    end
    @all = {menu: @menu_hash, menu_items: @info}
    render json: @all
  end

  def all_menus
    @menus = Menu.all.order(:start_at)
    @formatted_menus = @menus.map { |menu| { id: menu.id, start_at: menu.start_at.strftime("%b %d, %Y") } }
    render json: @formatted_menus
  end

  def create
    @menu = Menu.new
    @menu.start_at = params[:menu][:start_at]
    @menu.end_at = params[:menu][:start_at]
    @menu.save

    params[:menu_items].each do |menu_item|
      item = MenuItem.new
      item.menu = @menu
      item.recipe = Recipe.find_by(name: menu_item[:menu_item])
      item.save
    end
    # if menu.save
    #   render :json => menu
    # else
    #   render status: 400
    # end
  end

  def show
    @info = []
    @menu = Menu.find_by(id: params[:id])

    @menu.menu_items.each do |item|
      @info << Recipe.find(item.recipe_id)
    end

    @all = {menu: @menu, menu_items: @info}
    render json: @all
  end

  def update
    @menu.find_by(id: params[:menu][:id])
    @menu.start_at = params[:menu][:start_at]
    @menu.end_at = params[:menu][:end_at]
    @menu.save
    render json: @menu
  end

  def destroy
    @menu.find_by(id: params[:menu][:id])
    @menu.destroy
  end

  private

  def menu_params
    params.require(:menu).permit(:start_at, :end_at)
  end

end
