class RemoveMinuteFromMeals < ActiveRecord::Migration[6.0]
  def change
    remove_column :meals, :minute, :integer, after: :hour
  end
end
