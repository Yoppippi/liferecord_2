class RenameTimeColumnToMeals < ActiveRecord::Migration[6.0]
  def change
    rename_column :meals, :time, :hour
  end
end
