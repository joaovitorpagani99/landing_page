require "test_helper"

class ContactMessageTest < ActiveSupport::TestCase
  setup do
  @contact = contact_messages(:one)
  end
  test "should save valid contact_message" do
    assert @contact.save
  end

  test "should not save contact_message without name" do
    contact = contact_messages(:empty_name)
    assert_not contact.save
  end

  test "should not save contact_message without phone" do
    contact = contact_messages(:empty_phone)
    assert_not contact.save
  end

  test "should not save contact_message without email" do
    contact = contact_messages(:empty_email)
    assert_not contact.save
  end

  test "should not save contact_message with invalid email" do
    contact = contact_messages(:invalid_email)
    assert_not contact.save
  end

  test "should not save contact_message without message" do
    contact = contact_messages(:empty_message)
    assert_not contact.save
  end
end
