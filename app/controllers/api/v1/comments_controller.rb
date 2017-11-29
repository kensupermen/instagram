module Api
  module V1
    class CommentsController < BaseController
      def create
        Comment.create(comment_params)
      end

      private

      def comment_params
        params.require(:comment).permit(:post_id, :message).merge(user: current_user)
      end
    end
  end
end
