class Message < ActiveRecord::Base
	validates_presence_of :sender_id, :recipient_id, :body

	belongs_to :sender, class_name: 'User', foreign_key: :sender_id
	belongs_to :recipient, class_name: 'User', foreign_key: :recipient_id
end
