Kocupid.Views.MessagesIndexItem = Backbone.View.extend({
	template: JST['messages/index_item'],
	tagName: 'li',
	className: 'messages-index-item',
	events: {
		'click' : 'showMessage'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	showMessage: function () {
		var content = JST['messages/show']({ message: this.model });
		this.$el.html(content);
		return this;
	},

	render: function () {
		var content = this.template({ message: this.model });
		this.$el.html(content);
		return this;
	}
});