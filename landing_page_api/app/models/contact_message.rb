class ContactMessage < ApplicationRecord
  validates :name, presence: true
  validates :phone, presence: true
  validates :message, presence: true
  validates :email, presence: true
end
