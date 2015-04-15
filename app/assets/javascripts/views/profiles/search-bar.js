Kocupid.Views.SearchBar = Backbone.View.extend({
	template: JST['profiles/search_bar'],
	tagName: 'div',
	events: {
		'submit' : 'search',
		'click .search' : 'search',
		'change .form-control' : 'search'
	},

	initialize: function (options) {
		this.fullCollection = options.fullCollection;
		this.usernames = this.fullCollection.usernames();
		this.listenTo(this.fullCollection, 'sync', this.render);
	},

	search: function (event) {
		this.collection.set(this.fullCollection.models);
		var ageFilter = false;

		event && event.preventDefault();
		var data = this.$('form').serializeJSON();
		for (var k in data) {
			if (!data[k]) {
				delete data[k];
			} else if (data[k] === 'true') {
				data[k] = true;
			}
		}

		var age_start = data['age_start'];
		var age_end = data['age_end'];

		delete data['age_start']
		delete data['age_end']

		this.collection.models.forEach(function (profile) {
			if (profile.get('age') < age_start || profile.get('age') > age_end) {
				this.collection.remove(profile)
				ageFilter = true
			}
		}.bind(this));

		if (!$.isEmptyObject(data)) {
			this.collection.set(this.collection.where(data));
		} else if (!ageFilter) {
			this.collection.set([]);
			this.collection.set(this.fullCollection.models);
		}
	},

	render: function () {
		var usernames = JSON.stringify(this.fullCollection.usernames());
		var content = this.template({ usernames: usernames });
		this.$el.html(content);
		return this;
	}
});