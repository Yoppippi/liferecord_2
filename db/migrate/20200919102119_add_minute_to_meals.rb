class AddMinuteToMeals < ActiveRecord::Migration[6.0]
  def change
    add_column :meals, :minute, :integer
  end
end