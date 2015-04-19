class Visit < ActiveRecord::Base
	belongs_to :visitor, class_name: 'User', foreign_key: :visitor_id
	belongs_to :visitee, class_name: 'User', foreign_key: :visitee_id
end
