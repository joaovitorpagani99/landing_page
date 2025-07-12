# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

Image.delete_all
Vehicle.delete_all
Client.delete_all
ContactMessage.delete_all


vehicle = Vehicle.create!(
  brand: "Toyota",
  model: "Corolla XEi",
  year: 2020,
  color: "Prata",
  mileage: 45000,
  price: 89900.00
)

images = [
  "https://cdn.motor1.com/images/mgl/MbWRR/s1/2020-toyota-corolla.jpg",
  "https://cdn.motor1.com/images/mgl/JYY0n/s1/2020-toyota-corolla-xse.jpg",
  "https://cdn.motor1.com/images/mgl/1EqqX/s1/2020-toyota-corolla-interior.jpg",
  "https://cdn.motor1.com/images/mgl/JqYY3/s1/2020-toyota-corolla-rear.jpg"
]

images.each do |url|
  vehicle.images.create!(url: url)
end


Client.create!(
  name: "Loja Top Carros",
  whatsapp: "5599999999999"
)
