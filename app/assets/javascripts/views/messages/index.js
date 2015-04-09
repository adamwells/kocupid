Kocupid.Views.MessagesIndex = Backbone.CompositeView.extend({
	template: JST['messages/index'],

	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},

	addMessage: function (message) {
		var indexItem = new Kocupid.Views.MessagesIndexItem({ model: message });
		this.addSubview('.messages-index', indexItem);
	},

	addMessages: function () {
		this.collection.each(function (message) {
			this.addMessage(message);
		}.bind(this));
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.addMessages();
		return this;
	}
});