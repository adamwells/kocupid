class Bookmark < ActiveRecord::Base
	belongs_to :bookmarker, class_name: 'User', foreign_key: :bookmarker_id
	belongs_to :bookmarkee, class_name: 'User', foreign_key: :bookmarkee_id
end
