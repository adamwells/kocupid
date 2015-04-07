# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all()
Profile.destroy_all()

User.create!(email: 'adam', username: 'adam', password: 'adam')

20.times do
	User.create!(email: Faker::Internet.email,
							 username: Faker::Internet.user_name, 
							 password: Faker::Internet.password)
end

21.times do |i|
	Profile.create!(user_id: i + 1,
									self_summary: Faker::Lorem.paragraph,
									good_at: Faker::Lorem.paragraph,
									message_if: Faker::Lorem.paragraph)
end