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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
