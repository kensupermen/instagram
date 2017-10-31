module Api
  module V1
    class PostsController < BaseController
      def index
        @posts = Post.all
      end
    end
  end
end
