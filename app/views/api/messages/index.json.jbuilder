json.array! @messages do |message|
	json.sender_username message.sender.username
	json.recipient_username message.recipient.username
	json.sender_id message.sender.id
	json.recipient_id message.recipient.id
	json.body message.body
	json.sent_at message.created_at
	json.id message.id
end