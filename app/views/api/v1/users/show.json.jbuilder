# frozen_string_literal: true

json.id @user.id
json.first_name @user.first_name
json.last_name @user.last_name
json.posts @user.posts

images = []
@user.posts.each do |post|
  images << { id: post.id, url: post.image.url(:small) }
end

json.images images
