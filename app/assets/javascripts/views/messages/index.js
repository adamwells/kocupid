
Kocupid.Views.MessagesIndex = Backbone.CompositeView.extend({
	template: JST['messages/index'],
	events: {
		'click .sent' : 'sent',
		'click .received' : 'received',
		'click .messages-index-item' : 'displayMessage'
	},

	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
		this.received();
	},

	sent: function () {
		this.currentView = 'sent';
		this.clearMessages();
		this.addMessages(this.sentMessages());
		this.render();
	},

	received: function () {
		this.currentView = 'received'
		this.clearMessages();
		this.addMessages(this.receivedMessages());
		this.render();
	},

	displayMessage: function (message) {
		debugger
		this.currentView = null;
		this.clearMessages();
		var messageView = new Kocupid.Views.MessageShow({ model: message });
		this.addSubview('.message-box', messageView);
	},

	addMessage: function (message) {
		var indexItem = new Kocupid.Views.MessagesIndexItem({ model: message });
		this.addSubview('.message-box', indexItem);
	},

	sentMessages: function () {
		sent = this.collection.where({ sender_id: Kocupid.currentUserId });
		return new Kocupid.Collections.Messages(sent);
	},

	receivedMessages: function () {
		received = this.collection.where({ recipient_id: Kocupid.currentUserId });
		return new Kocupid.Collections.Messages(received);
	},

	addMessages: function (collection) {
		collection.each(function (message) {
			this.addMessage(message);
		}.bind(this));
	},

	clearMessages: function() {
		this.removeSubviews('.message-box');
	},

	render: function () {
		var content = this.template({ currentView: this.currentView });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});