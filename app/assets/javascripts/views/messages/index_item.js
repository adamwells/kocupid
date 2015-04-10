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
		// console.log(this.model)
		// window.router.navigate('/messages/' + this.model.get('id'), { trigger: true });
	},

	render: function () {
		var content = this.template({ message: this.model });
		this.$el.html(content);
		return this;
	}
});