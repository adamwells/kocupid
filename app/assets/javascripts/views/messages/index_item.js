Kocupid.Views.MessagesIndexItem = Backbone.View.extend({
	template: JST['messages/index_item'],
	tagName: 'li',
	className: 'messages-index-item',
	events: {
		'click .view-message-button' : 'showMessage',
		'click .close-message-button' : 'render',
		'click .send' : 'sendReply'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	showMessage: function () {
		var content = JST['messages/show']({ message: this.model });
		this.$el.html(content);
		return this;
	},

	sendReply: function (event) {
		event.preventDefault();
		var data = this.$('.reply-form').serializeJSON();
		var message = new Kocupid.Models.Message(data);
		var messages = this.collection;

		message.save({ recipient_username: this.model.get('sender_username')}, {
			success: function () {
				messages.add(message);
				console.log("Woot!  Made it here.");
			}
		})
	},

	render: function () {
		var content = this.template({ message: this.model });
		this.$el.html(content);
		return this;
	}
});