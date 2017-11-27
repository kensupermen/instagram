json.posts @posts do |post|
  json.id post.id
  json.caption post.caption
  json.image post.image.url(:medium)
end
