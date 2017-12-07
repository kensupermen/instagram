json.id @post.id
json.caption @post.caption
json.image @post.image.url(:medium)
json.user @post.user
json.first_name @post.user.first_name
json.last_name @post.user.last_name

comments = []
@post.comments.each do |comment|
  comments << { user: comment.user, message: comment.message }
end

json.comments comments
