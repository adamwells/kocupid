Kocupid.Views.MessagesIndex = Backbone.CompositeView.extend({
	template: JST['messages/index'],

	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},

	addMessage: function (selector, message) {
		var indexItem = new Kocupid.Views.MessagesIndexItem({ model: message });
		this.addSubview(selector, indexItem);
	},

	sentMessages: function () {
		sent = this.collection.where({ sender_id: Kocupid.currentUserId });
		return new Kocupid.Collections.Messages(sent);
	},

	receivedMessages: function () {
		received = this.collection.where({ recipient_id: Kocupid.currentUserId });
		return new Kocupid.Collections.Messages(received);
	},

	addMessages: function (selector, collection) {
		collection.each(function (message) {
			this.addMessage(selector, message);
		}.bind(this));
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.addMessages('.sent-messages-index', this.sentMessages());
		return this;
	}
});