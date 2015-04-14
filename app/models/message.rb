# == Schema Information
#
# Table name: messages
#
#  id                   :integer          not null, primary key
#  sender_id            :integer          not null
#  recipient_id         :integer          not null
#  body                 :text             not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  visible_to_sender    :boolean          default(TRUE)
#  visible_to_recipient :boolean          default(TRUE)
#

class Message < ActiveRecord::Base
	validates_presence_of :sender_id, :recipient_id, :body

	belongs_to :sender, class_name: 'User', foreign_key: :sender_id
	belongs_to :recipient, class_name: 'User', foreign_key: :recipient_id
end
