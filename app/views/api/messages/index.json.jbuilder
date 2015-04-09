json.array! @messages do |message|
	json.sender message.sender.username
	json.recipient message.recipient.username
	json.body message.body
end