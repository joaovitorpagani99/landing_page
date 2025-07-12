class CreateContactMessages < ActiveRecord::Migration[8.0]
  def change
    create_table :contact_messages do |t|
      t.string :name
      t.string :phone
      t.text :message

      t.timestamps
    end
  end
end
