class Vehicle < ApplicationRecord
  validates :brand, presence: true
  validates :model, presence: true
  validates :year, presence: true
  validates :color, presence: true
  validates :mileage, presence: true
  validates :price, presence: true

  has_many :images, dependent: :destroy
end
