class AddMinuteToMotions < ActiveRecord::Migration[6.0]
  def change
    add_column :motions, :minute, :integer, after: :hour
  end
end
