Kocupid.Views.MessagesIndexItem = Backbone.View.extend({
	template: JST['messages/index_item'],
	tagName: 'li',
	className: 'messages-index-item',
	events: {
		'click :not(.close-message-button, .delete-message-button)' : 'showMessage',
		'click .close-message-button' : 'render',
		'click .delete-message-button' : 'deleteMessage',
		'click .send' : 'sendReply'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
		this.expanded = false;
	},

	showMessage: function (event) {
		if (!this.expanded) {
			var content = JST['messages/show']({ message: this.model });
			this.$el.html(content);
			this.expanded = true;
			return this;	
		}
	},

	deleteMessage: function () {
		console.log('deleted');
	},

	sendReply: function (event) {
		event.preventDefault();
		var button = this.$('.send');
		button.prop('disabled', true);
		
		var data = this.$('.reply-form').serializeJSON();
		var message = new Kocupid.Models.Message(data);

		message.save({ recipient_username: this.model.get('sender_username') }, {
			success: function () {
				this.collection.add(message);
				button.prop('disabled', false);
				this.swapFormOut(message);
			}.bind(this)
		});
	},

	swapFormOut: function (message) {
		var messageReply = JST['messages/reply']({ message: message });
		this.$('.reply-form').html(messageReply);
	},

	render: function () {
		var content = this.template({ message: this.model });
		this.$el.html(content);
		this.expanded = false;
		return this;
	}
});