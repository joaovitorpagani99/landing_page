class AddEmailToContactMessages < ActiveRecord::Migration[8.0]
  def change
    add_column :contact_messages, :email, :string
  end
end
