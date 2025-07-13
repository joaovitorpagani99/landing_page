require "test_helper"

class VehicleTest < ActiveSupport::TestCase
  test "should be valid with all attributes" do
    assert vehicles(:one).valid?
  end

  test "should not save vehicle without brand" do
    assert_not vehicles(:empty_brand).save
  end

  test "should not save vehicle without model" do
    assert_not vehicles(:empty_model).save
  end

  test "should not save vehicle without year" do
    assert_not vehicles(:empty_year).save
  end

  test "should not save vehicle without color" do
    assert_not vehicles(:empty_color).save
  end

  test "should not save vehicle without mileage" do
    assert_not vehicles(:empty_mileage).save
  end

  test "should not save vehicle without price" do
    assert_not vehicles(:empty_price).save
  end
end
