json.array! @likes do |like|
	json.extract! like, :id, :liker_id, :likee_id
end