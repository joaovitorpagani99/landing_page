require "test_helper"

class ClientTest < ActiveSupport::TestCase
  setup do
    @client = clients(:one)
  end

  test "should save valid client" do
    assert @client.save
  end

  test "should not save client without name" do
    client = clients(:empty_name)
    assert_not client.save
  end

  test "should not save client without whatsapp" do
    client = clients(:empty_whatsapp)
    assert_not client.save
  end

  test "should not save client without required fields" do
    client = clients(:empty)
    assert_not client.save
  end
end
