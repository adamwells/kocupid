# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all()
Profile.destroy_all()

PHOTOS = ['http://i.imgur.com/sciSQG3.jpg', 'http://i.imgur.com/BhqqCZG.jpg', 'http://i.imgur.com/FL1hyX8.jpg',
'http://i.imgur.com/OcrRV00.jpg', 'http://i.imgur.com/Fed3Qmu.jpg', 'http://i.imgur.com/BUPVDoX.jpg',
'http://i.imgur.com/PPAArko.jpg', 'http://i.imgur.com/uU2oxH1.jpg', 'http://i.imgur.com/TkdCEZB.jpg',
'http://i.imgur.com/SdCtKB8.jpg']

User.create!(email: 'adam', username: 'adam', password: 'adam')

20.times do
	User.create!(email: Faker::Internet.email,
							 username: Faker::Internet.user_name, 
							 password: Faker::Internet.password)
end

21.times do |i|
	Profile.create!(user_id: User.all[i].id,
									self_summary: Faker::Lorem.paragraph,
									good_at: Faker::Lorem.paragraph,
									message_if: Faker::Lorem.paragraph,
									photo_url: PHOTOS.sample)
end