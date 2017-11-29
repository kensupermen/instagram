module Api
  module V1
    class CommentsController < BaseController
      def create
        @comment = Comment.new(comment_params)
        @comment.post_id = params[:id]
        @comment.save
      end

      private

      def comment_params
        params.require(:comment).permit(:message).merge(user: current_user)
      end
    end
  end
end
