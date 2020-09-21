class RenameTimeColumnToMotions < ActiveRecord::Migration[6.0]
  def change
    rename_column :motions, :time, :hour
  end
end
