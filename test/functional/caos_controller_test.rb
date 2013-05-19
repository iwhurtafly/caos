require 'test_helper'

class CaosControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get services" do
    get :services
    assert_response :success
  end

  test "should get stylist" do
    get :stylist
    assert_response :success
  end

  test "should get gallery" do
    get :gallery
    assert_response :success
  end

  test "should get blog" do
    get :blog
    assert_response :success
  end

  test "should get link" do
    get :link
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
