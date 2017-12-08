json.posts @posts do |post|
  json.id post.id
  json.caption post.caption
  json.image post.image.url(:medium)
  json.first_name post.user.first_name
  json.last_name post.user.last_name
  json.user post.user
  json.likes_size post.get_likes.size
  json.liked current_user.voted_for? post if current_user

  comments = []
  post.comments.each do |comment|
    comments << { id: comment.id, user: comment.user, message: comment.message }
  end

  json.comments comments
end
