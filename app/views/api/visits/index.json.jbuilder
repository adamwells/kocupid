json.array! @visits do |visit|
	json.extract! visit, :updated_at
	json.photo_url visit.visitee.profile.photo_url
	json.profile_id visit.visitee.profile.id
end