Kocupid.Views.MessagesIndexItem = Backbone.View.extend({
	template: JST['messages/index_item'],
	tagName: 'li',

	render: function () {
		var content = this.template({ message: this.model });
		this.$el.html(content);
		return this;
	}
});