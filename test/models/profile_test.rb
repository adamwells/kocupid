# == Schema Information
#
# Table name: profiles
#
#  id                           :integer          not null, primary key
#  user_id                      :integer          not null
#  photo_url                    :string
#  self_summary                 :text
#  good_at                      :text
#  message_if                   :text
#  height                       :integer
#  weight                       :integer
#  body_type                    :string
#  weight_class                 :string
#  style                        :string
#  looking_for_wrestler         :boolean          default(TRUE)
#  looking_for_boxer            :boolean          default(TRUE)
#  looking_for_mma_fighter      :boolean          default(TRUE)
#  looking_for_other_styles     :boolean          default(TRUE)
#  looking_for_women            :boolean          default(TRUE)
#  looking_for_men              :boolean          default(TRUE)
#  looking_for_opponent         :boolean          default(TRUE)
#  looking_for_sparring_partner :boolean          default(TRUE)
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  gender                       :string
#  birth_date                   :date
#  looking_for_other_genders    :boolean          default(TRUE)
#

require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
