# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
	validates_presence_of :username, :email, :session_token, :password_digest
	validates_uniqueness_of :username, :email, :session_token

	after_initialize :ensure_session_token

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
	end

	def self.generate_session_token
		SecureRandom.urlsafe_base64
	end

	def reset_session_token
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end
end
