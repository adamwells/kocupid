json.partial! 'users/basic_info', user: @user
json.merge! @profile.attributes
json.like_id @like_id