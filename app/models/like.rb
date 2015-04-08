# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  liker_id   :integer          not null
#  likee_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ActiveRecord::Base
	validates_uniqueness_of :liker_id, scope: :likee_id

	belongs_to :liker, class_name: 'User', foreign_key: :liker_id
	belongs_to :likee, class_name: 'User', foreign_key: :likee_id
end
