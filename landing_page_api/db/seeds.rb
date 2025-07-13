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
  brand: "Jeep",
  model: "Wrangler Sahara",
  year: 2025,
  color: "Azul",
  mileage: 45000,
  price: 89900.00
)

images = [
  "https://www.topgear.com/sites/default/files/cars-car/image/2024/04/1-Jeep-Wrangler-review-2024.jpg?w=1280&h=720",
  "https://carroscomcamanzi.com.br/wp-content/uploads/2023/04/Jeep-Wrangler-2024.jpg",
  "https://static.shopcar.com.br/stored/news/1723248897_93729.jpg",
  "https://carrosbemmontados.com.br/wp-content/uploads/2023/07/Jeep-Wrangler-2024.png.webp",
  "https://cdnwp.dealerk.com/eed49ed7/uploads/sites/715/2023/09/jeep-wrangler-mca-my24-phev-visor_70d82n.png",
  "https://production.autoforce.com/uploads/picture/image/256403367/main_webp_comprar-wrangler-2023-c6d5d8ce-77be-42b4-a9fb-62d0c9467062_d36081a7ae.png.webp",
  "https://www.jeep.com.br/content/dam/jeep/wrangler/2024/galeria-02-mobile.webp",
  "https://www.megautos.com/wp-content/uploads/2025/01/Jeep_Wrangler_Rubicom_My25_h1.jpg"
]

images.each do |url|
  vehicle.images.create!(url: url)
end


Client.create!(
  name: "Loja Pagani",
  whatsapp: "61992453208"
)
