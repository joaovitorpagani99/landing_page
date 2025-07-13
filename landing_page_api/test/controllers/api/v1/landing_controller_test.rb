require "test_helper"

class Api::V1::LandingControllerTest < ActionDispatch::IntegrationTest
  setup do
    @contact = contact_messages(:one)
  end

  test "get vehicle" do
    get api_v1_landing_vehicle_path
    assert_response :success
  end

  test "get store" do
    get api_v1_landing_store_path
    assert_response :success
  end

  test "post contact" do
    post api_v1_landing_contact_path, params: {
      contact_message: {
        name: @contact.name,
        phone: @contact.phone,
        email: @contact.email,
        message: @contact.message
      }
    }
    assert_response :created
  end

  test "get vehicle returns not found if no vehicle" do
    Image.delete_all
    Vehicle.delete_all
    get api_v1_landing_vehicle_path
    assert_response :not_found
    assert_equal "Nenhum veículo encontrado", response.parsed_body["error"]
  end

  test "get store returns not found if no client" do
    Client.delete_all
    get api_v1_landing_store_path
    assert_response :not_found
    assert_equal "Informações da loja não encontradas", response.parsed_body["error"]
  end

  test "should not create contact with invalid email" do
    post api_v1_landing_contact_path, params: {
      contact_message: {
        name: "Teste",
        phone: "5599999999999",
        email: "email_invalido",
        message: "Mensagem"
      }
    }
    assert_response :unprocessable_entity
    assert_includes response.parsed_body["errors"], "Email is invalid"
  end

  test "should not create contact with missing fields" do
    post api_v1_landing_contact_path, params: {
      contact_message: {
        name: "",
        phone: "",
        email: "",
        message: ""
      }
    }
    assert_response :unprocessable_entity
    assert_includes response.parsed_body["errors"], "Name can't be blank"
    assert_includes response.parsed_body["errors"], "Phone can't be blank"
    assert_includes response.parsed_body["errors"], "Email can't be blank"
    assert_includes response.parsed_body["errors"], "Message can't be blank"
  end
end
