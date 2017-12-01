module Api
  module V1
    class PostsController < BaseController
      def index
        @posts = Post.all.order('created_at desc')
      end

      def show
        @post = Post.find params[:id]
      end
    end
  end
end
