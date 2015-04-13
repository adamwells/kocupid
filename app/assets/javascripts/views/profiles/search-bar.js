Kocupid.Views.SearchBar = Backbone.View.extend({
	template: JST['profiles/search_bar'],
	tagName: 'div',
	events: {
		'submit' : 'search'
	},

	initialize: function (options) {
		this.fullCollection = options.fullCollection;
		this.usernames = this.fullCollection.usernames();
	},

	search: function (event) {
		this.collection.set(this.fullCollection.models);

		event.preventDefault();
		var data = this.$('form').serializeJSON();
		for (var k in data) {
			if (!data[k]) {
				delete data[k];
			}
		}

		if (!$.isEmptyObject(data)) {
			this.collection.set(this.collection.where(data));
		}
	},

	render: function () {
		var usernames = JSON.stringify(this.fullCollection.usernames());
		var content = this.template({ usernames: usernames });
		this.$el.html(content);
		return this;
	}
});