Kocupid.Views.SearchBar = Backbone.View.extend({
	template: JST['profiles/search_bar'],
	tagName: 'form',
	events: {
		'submit' : 'search'
	},

	initialize: function (options) {
		this.fullCollection = options.fullCollection;
	},

	search: function (event) {
		this.collection.set(this.fullCollection.models);

		event.preventDefault();
		var data = this.$el.serializeJSON();
		for (var k in data) {
			if (!data[k]) {
				delete data[k];
			}
		}

		console.log(data);
		if (!$.isEmptyObject(data)) {
			this.collection.set(this.collection.where(data));
		}
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});