module Api
  module V1
    class PostsController < BaseController
      before_action :authenticate_user!, only: :like

      def index
        @posts = Post.all.order('created_at desc')
      end

      def show
        @post = post
      end

      def like
        post.liked_by current_user
      end

      private

      def post
        Post.find params[:id]
      end
    end
  end
end
