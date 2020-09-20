class RenameTimeColumnToSleeps < ActiveRecord::Migration[6.0]
  def change
    rename_column :sleeps, :time, :hour
  end
end
