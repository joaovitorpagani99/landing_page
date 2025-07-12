class CreateImages < ActiveRecord::Migration[8.0]
  def change
    create_table :images do |t|
      t.string :url
      t.references :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
