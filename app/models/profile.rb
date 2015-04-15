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

class Profile < ActiveRecord::Base
	belongs_to :user

	def compatibility_points(user)
		points = 0
		profile = user.profile

		points += 1 if profile.looking_for_wrestler && self.style == "Wrestler"
		points += 1 if profile.looking_for_boxer && self.style == "Boxer"
		points += 1 if profile.looking_for_mma_fighter && self.style == "MMA Fighter"
		points += 1 if profile.looking_for_other_styles && self.style == "Other"

		points += 1 if profile.looking_for_men && self.gender == "Male"
		points += 1 if profile.looking_for_women && self.gender == "Female"
		points += 1 if profile.looking_for_other_genders && self.gender == "Other"

		points += 1 if profile.looking_for_opponent && self.looking_for_opponent
		points += 1 if profile.looking_for_sparring_partner && self.looking_for_sparring_partner

		points
	end

	def age
		return ((Time.now.to_date - self.birth_date)/365.25).to_i
	end
end
