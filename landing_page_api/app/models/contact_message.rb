class ContactMessage < ApplicationRecord
  validates :name, presence: true
  validates :phone, presence: true
  validates :message, presence: true
  validates :email, presence: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: "is invalid" }
end
