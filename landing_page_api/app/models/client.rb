class Client < ApplicationRecord
  validates :name, presence: true
  validates :whatsapp, presence: true
end
