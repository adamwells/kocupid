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
	}
});