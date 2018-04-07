class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find params[:id]
    @images = []
    @user.posts.each do |post|
      @images << post.image.url(:small)
    end
  end
end
