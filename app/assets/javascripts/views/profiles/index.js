Kocupid.Views.ProfilesIndex = Backbone.CompositeView.extend({
	template: JST['profiles/index'],

	initialize: function () {
		this.shownItems = new Kocupid.Collections.Profiles();
		this.addSearchBar();
		this.addProfiles();

		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.shownItems, 'add', this.addProfile);
		this.listenTo(this.shownItems, 'remove', this.removeProfile);
	},

	removeProfile: function (profile) {
		var profileView = $.grep(this.subviews()['.profiles-index'],
														 function(view) {return view.model.id === profile.id })[0];
		this.removeSubview('.profiles-index', profileView);
	},

	addSearchBar: function () {
		var searchBar = new Kocupid.Views.SearchBar({ collection: this.shownItems, fullCollection: this.collection });
		this.addSubview('.search-bar', searchBar);
	},

	addProfile: function (profile) {
		var indexItem = new Kocupid.Views.ProfilesIndexItem({ model: profile });
		this.addSubview('.profiles-index', indexItem);
	},

	addProfiles: function () {
		this.shownItems.each(function (profile) {
			this.addProfile(profile);
		}.bind(this));
	},

	render: function () {
		var content = this.template({ profiles: this.shownItems });
		this.shownItems.set(this.collection.models)
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});