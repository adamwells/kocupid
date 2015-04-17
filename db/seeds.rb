# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all()
Profile.destroy_all()
Like.destroy_all()
Message.destroy_all()

PHOTOS = ['http://i.imgur.com/sciSQG3.jpg', 'http://i.imgur.com/BhqqCZG.jpg', 'http://i.imgur.com/FL1hyX8.jpg',
'http://i.imgur.com/OcrRV00.jpg', 'http://i.imgur.com/Fed3Qmu.jpg', 'http://i.imgur.com/BUPVDoX.jpg',
'http://i.imgur.com/PPAArko.jpg', 'http://i.imgur.com/uU2oxH1.jpg', 'http://i.imgur.com/TkdCEZB.jpg',
'http://i.imgur.com/SdCtKB8.jpg']

STYLES = ['Boxer', 'Wrestler', 'MMA Fighter', 'Other']

WEIGHT_CLASSES = ['Featherweight', 'Lightweight', 'Middleweight', 'Heavyweight']

BODY_TYPES = ['Tank', 'Flimsy', 'Built', 'Stacked', 'Jacked', 'Yoked']

GENDERS = ['Male', 'Female', 'Other']

User.create!(email: 'rhonda.rousey@strikeforce.net', username: 'rhonda.rousey', password: 'rhondapassword')
User.create!(email: 'sample@example.com', username: 'brock_lesnar', password: 'password');
User.create!(email: 'sample@example.com', username: 'bibiano_fernandes', password: 'password');
User.create!(email: 'sample@example.com', username: 'cain.velasquez', password: 'password');
User.create!(email: 'sample@example.com', username: 'jake.shields', password: 'password');
User.create!(email: 'sample@example.com', username: 'shinya', password: 'password');
User.create!(email: 'sample@example.com', username: 'bibiano_fernandes', password: 'password');
# Tanakori Gomi
User.create!(email: 'sample@example.com', username: 't.gomi', password: 'password');
# Rich Franklin
User.create!(email: 'sample@example.com', username: 'rich.f', password: 'password');
User.create!(email: 'sample@example.com', username: 'frankMir', password: 'password');
# Frankie Edgar
User.create!(email: 'sample@example.com', username: 'frankie', password: 'password');
# Josh Barnett
User.create!(email: 'sample@example.com', username: 'j_barnett', password: 'password');
# Chuck Lidell
User.create!(email: 'sample@example.com', username: 'chucky', password: 'password');
# Rampage Jackson
User.create!(email: 'sample@example.com', username: 'RAMPAGE', password: 'password');
# Junior Dos Santos
User.create!(email: 'sample@example.com', username: 'jr_ds', password: 'password');
# Mirko Cro Cop
User.create!(email: 'sample@example.com', username: 'cro.cop', password: 'password');
# Lyoto Machida
User.create!(email: 'sample@example.com', username: 'lyoto_m', password: 'password');
# Urijah Faber
User.create!(email: 'sample@example.com', username: 'urijah', password: 'password');
# Wanderlei Silva
User.create!(email: 'sample@example.com', username: 'w_silva', password: 'password');
# Shogun Rua
User.create!(email: 'sample@example.com', username: 'the_shogun', password: 'password');
# Matt Hughes
User.create!(email: 'sample@example.com', username: 'matty_h', password: 'password');
# Jon Fitch
User.create!(email: 'sample@example.com', username: 'j.fitch', password: 'password');
# Rashad Evans
User.create!(email: 'sample@example.com', username: 'rashad', password: 'password');
# Jon Jones
User.create!(email: 'sample@example.com', username: 'jj', password: 'password');


100.times do
	User.create!(email: Faker::Internet.email,
							 username: Faker::Internet.user_name, 
							 password: Faker::Internet.password)
end

101.times do |i|
	Profile.create!(user_id: User.all[i].id,
									self_summary: Faker::Lorem.paragraph,
									good_at: Faker::Lorem.paragraph,
									message_if: Faker::Lorem.paragraph,
									style: STYLES.sample,
									body_type: BODY_TYPES.sample,
									height_feet: rand(5..7),
									height_inches: rand(12),
									weight: rand(150..300),
									weight_class: WEIGHT_CLASSES.sample,
									gender: GENDERS.sample,
									photo_url: PHOTOS.sample,
									birth_date: Faker::Time.between(100.years.ago, 18.years.ago).to_date,
									looking_for_wrestler: (rand(2) > 0),
									looking_for_boxer: (rand(2) > 0),
									looking_for_mma_fighter: (rand(2) > 0),
									looking_for_other_styles: (rand(2) > 0),
									looking_for_men: (rand(2) > 0),
									looking_for_women: (rand(2) > 0),
									looking_for_sparring_partner: (rand(2) > 0),
									looking_for_opponent: (rand(2) > 0)
									)
end

500.times do
	liker_id = User.all[rand(21)].id
	likee_id = User.all[rand(21)].id
	if !Like.find_by(liker_id: liker_id, likee_id: likee_id)
		Like.create!(liker_id: liker_id, likee_id: likee_id)
	end
end

1500.times do
	Message.create!(sender_id: User.all[rand(21)].id, 
									recipient_id: User.all[rand(21)].id,
									body: Faker::Lorem.paragraph,
									seen: (rand(2) > 0))
end