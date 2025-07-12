class Vehicle < ApplicationRecord
  has_many :images, dependent: :destroy
end
