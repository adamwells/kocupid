Kocupid.Views.SearchBar = Backbone.View.extend({
	template: JST['profiles/search_bar'],
	tagName: 'form',
	events: {
		'submit' : 'search'
	},

	initialize: function (options) {
		this.parentView = options.parentView;
	},

	search: function (event) {
		event.preventDefault();
		var data = this.$el.serializeJSON();
		this.parentView.collection.set(this.parentView.collection.where(data));
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});