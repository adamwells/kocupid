json.partial! 'users/basic_info', user: @user
json.merge! @profile.attributes
json.age @profile.age
json.like_id @like_id
json.bookmark_id @bookmark_id
json.visit_id @visit_id