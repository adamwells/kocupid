json.partial! 'users/basic_info', user: @user
json.merge! @profile.attributes
json.like_id @like_id
json.bookmark_id @bookmark_id