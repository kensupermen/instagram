json.posts @posts do |post|
  json.id post.id
  json.caption post.caption
  json.image post.image.url(:medium)
  json.first_name post.user.first_name
  json.last_name post.user.last_name
end
