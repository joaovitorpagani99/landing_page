require "test_helper"

class ImageTest < ActiveSupport::TestCase
  setup do
    @image = images(:one)
  end

  test "should save valid image" do
    assert @image.save
  end

  test "should not save image without url" do
    image = Image.new(vehicle: vehicles(:one))
    assert_not image.save
  end

  test "should not save image without vehicle" do
    image = Image.new(url: "https://exemplo.com/imagem.jpg")
    assert_not image.save
  end
end
