# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
	validates_presence_of :username, :email, :session_token, :password_digest
	validates_uniqueness_of :username, :email, :session_token

	after_initialize :ensure_session_token

	has_many :received_likes, class_name: 'Like', foreign_key: :likee_id
	has_many :given_likes, class_name: 'Like', foreign_key: :liker_id

	has_many :likees, through: :given_likes
	has_many :likers, through: :received_likes

	has_many :sent_messages, class_name: 'Message', foreign_key: :sender_id
	has_many :received_messages, class_name: 'Message', foreign_key: :recipient_id

	has_many :bookmarks, class_name: 'Bookmark', foreign_key: :bookmarker_id
	has_many :bookmarkings, class_name: 'Bookmark', foreign_key: :bookmarkee_id

	has_many :bookmarkees, through: :bookmarks
	has_many :bookmarkers, through: :bookmarkings

	has_many :visits, foreign_key: :visitor_id, class_name: 'Visit'
	has_many :visitings, foreign_key: :visitee_id, class_name: 'Visit'

	has_many :visited_users, through: :visits
	has_many :visitors, through: :visitings

	has_one :profile, dependent: :destroy

	def self.generate_session_token
		SecureRandom.urlsafe_base64
	end

	def self.find_by_credentials(params)
		user = User.find_by(email: params[:login]) || User.find_by(username: params[:login])
		user && user.is_password?(params[:password]) ? user : nil
	end

	def password=(password)
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end
end
