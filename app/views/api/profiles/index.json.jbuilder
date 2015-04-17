json.array! @profiles do |profile|
	json.partial! 'users/basic_info', user: profile.user
	json.extract! profile, :gender, :photo_url, :body_type, :weight_class, :style, :id, :age

	json.bookmarked @bookmarks.find_by(bookmarkee_id: profile.id) != nil
	json.like_id @likes.find_by(likee_id: profile.user_id) ? @likes.find_by(likee_id: profile.user_id).id : nil
end

