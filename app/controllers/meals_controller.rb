class MealsController < ApplicationController
  
  def new
    @meal = Meal.new
  end

  def create
    redirect_to record_index_path
  end
end
