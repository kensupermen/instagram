class PostsController < ApplicationController
  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.create!(post_params)
    redirect_to posts_path
  end

  private

  def post_params
    params.require(:post).permit(:image, :caption)
  end
end
