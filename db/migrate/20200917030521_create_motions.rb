class CreateMotions < ActiveRecord::Migration[6.0]
  def change
    create_table :motions do |t|
      t.references   :user,        null: false, foreign_key: true
      t.integer      :time,        null: false
      t.string       :content

      t.timestamps
    end
  end
end
