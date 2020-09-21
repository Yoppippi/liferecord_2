class MealsController < ApplicationController

  def index
  end

  def new
    @meal = Meal.new
  end

  def create
    Meal.create(meal_params)
    redirect_to record_index_path
  end

  def show
  end

  private

  def meal_params
    params.require(:meal).permit(:hour, :minute, :content).merge(user_id: current_user.id)
  end
end
