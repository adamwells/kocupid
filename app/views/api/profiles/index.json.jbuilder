json.array! @profiles do |profile|
	json.partial! 'users/basic_info', user: profile.user
	json.extract! profile, :photo_url
end