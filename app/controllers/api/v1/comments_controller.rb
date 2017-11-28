module Api
  module V1
    class CommentsController < BaseController

      def create
        Comment.create(user: current_user, post: Post.first, message: 'abc')
      end
    end
  end
end
