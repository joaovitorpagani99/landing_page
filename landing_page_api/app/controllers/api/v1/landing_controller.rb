class Api::V1::LandingController < ApplicationController
  def vehicle
    vehicle = Vehicle.includes(:images).first
    if vehicle
      render json: vehicle.as_json(include: :images)
    else
      render json: { error: "Nenhum veículo encontrado" }, status: :not_found
    end
  end

  def store
    client = Client.first

    if client
      render json: client
    else
      render json: { error: "Informações da loja não encontradas" }, status: :not_found
    end
  end

  def contact
    message = ContactMessage.new(contact_params)

    if message.save
      render json: { status: "success", message: "Mensagem enviada com sucesso!" }, status: :created
    else
      render json: { errors: message.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def contact_params
    params.require(:contact_message).permit(:name, :phone, :message, :email)
  end
end
