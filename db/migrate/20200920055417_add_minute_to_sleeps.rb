class AddMinuteToSleeps < ActiveRecord::Migration[6.0]
  def change
    add_column :sleeps, :minute, :integer, after: :hour
  end
end
