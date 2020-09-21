class UsersController < ApplicationController

  def edit
  end

  def show
    @user = User.find(params[:id])
    @meals = Meal.all 
    @motions = Motion.all
    @sleeps = Sleep.all
  end

  def update
    if current_user.update(user_params)
      redirect_to record_index_path
    else
      render :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:nickname, :email)
  end
end
