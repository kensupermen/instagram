json.posts @posts do |post|
  json.id post.id
  json.caption post.caption
  json.image post.image.url(:medium)
  json.first_name post.user.first_name
  json.last_name post.user.last_name
  json.likes_size post.get_likes.size

  comments = []
  post.comments.each do |comment|
    comments << { username: comment.user, message: comment.message }
  end

  json.comments comments
end
