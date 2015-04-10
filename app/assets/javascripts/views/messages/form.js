Kocupid.Views.MessageForm = Backbone.View.extend({
	template: JST['messages/form'],
	tagName: 'form',
	events: {
		'submit' : 'sendMessage'
	},

	sendMessage: function (event) {
		event.preventDefault();
		var data = this.$el.serializeJSON();
		var message = new Kocupid.Models.Message(data);
		var messages = this.collection;

		message.save([], {
			success: function () {
				messages.add(message);
				window.router.navigate('/messages/' + message.id, { trigger: true });
			}
		})
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})