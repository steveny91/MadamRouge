class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by(email: params[:user][:email])

    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render json: {id: @user.id}
    else
      render :status => 400
    end
  end

  def destroy
    session.clear

    redirect_to "/"
  end

end
