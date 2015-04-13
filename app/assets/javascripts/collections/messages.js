Kocupid.Collections.Messages = Backbone.Collection.extend({
	url: '/api/messages',
	model: Kocupid.Models.Message,

	getOrFetch: function (id) {
		var message = this.get(id);
		var messages = this;

		if (!message) {
			message = new Kocupid.Models.Message({ id: id })
			message.fetch({
				success: function () {
					messages.add(message);
				}
			});
		} else {
			message.fetch();
		}

		return message;
	},

	comparator: function (message1, message2) {
		if (message1.get('sent_at') < message2.get('sent_at')) {
			return 1 
		} else {
			return -1
		}
	},

	usernames: function () {
		var usernames = [];
		this.models.forEach(function (message) {
			if (usernames.indexOf(message.escape('sender_username')) === -1) {
				usernames.push(message.escape('sender_username'));
			}

			if (usernames.indexOf(message.escape('recipient_username')) === -1) {
				usernames.push(message.escape('recipient_username'));
			}
		})
		return usernames;
	}
});