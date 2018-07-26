class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    p params[:user]
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      render json: {id: @user.id}
    else
      render :status => 503
    end

  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
