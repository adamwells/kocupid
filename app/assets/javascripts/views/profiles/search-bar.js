Kocupid.Views.SearchBar = Backbone.View.extend({
	template: JST['profiles/search_bar'],
	tagName: 'div',
	events: {
		'submit' : 'search'
	},

	initialize: function (options) {
		this.fullCollection = options.fullCollection;
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

		console.log(data);
		if (!$.isEmptyObject(data)) {
			this.collection.set(this.collection.where(data));
		}
	},

	usernameSuggestions: function () {
		var usernames = [];
		this.fullCollection.each(function (profile) {
			usernames.push(profile.escape('username'));
		});
		return usernames;
	},

	render: function () {
		var content = this.template({ usernames: JSON.stringify(this.usernameSuggestions()) });
		this.$el.html(content);
		return this;
	}
});