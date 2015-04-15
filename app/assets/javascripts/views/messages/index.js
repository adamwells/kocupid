
Kocupid.Views.MessagesIndex = Backbone.CompositeView.extend({
	template: JST['messages/index'],
	events: {
		'click .sent' : 'sent',
		'click .received' : 'received',
		'click .compose' : 'form',
	},

	initialize: function () {
		this.listenTo(this.collection, 'sync add', this.render);
		this.received();

		this.collection.fetch();

		this.addNavbar();
	},

	addNavbar: function () {
		var navbar = new Kocupid.Views.Navbar();
		this.addSubview('.navbar', navbar);
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

	form: function () {
		this.currentView = 'compose';
		this.clearMessages();
		var messageForm = new Kocupid.Views.MessageForm({ collection: this.collection });
		this.addSubview('.message-box', messageForm);
		this.render();
	},

	addMessage: function (message) {
		var indexItem = new Kocupid.Views.MessagesIndexItem({ model: message, collection: this.collection });
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

	addMessages: function (messages) {
		messages.each(function (message) {
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