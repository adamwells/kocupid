json.array! @profiles do |profile|
	json.partial! 'users/basic_info', user: profile.user
	json.extract! profile, :gender, :photo_url, :body_type, :weight_class, :style, :id

	json.bookmarked @bookmarks.find_by(bookmarkee_id: profile.id) != nil
end

