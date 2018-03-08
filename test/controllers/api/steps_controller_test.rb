require 'test_helper'

class Api::StepsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_steps_index_url
    assert_response :success
  end

  test "should get create" do
    get api_steps_create_url
    assert_response :success
  end

  test "should get update" do
    get api_steps_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_steps_destroy_url
    assert_response :success
  end

end
