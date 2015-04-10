Kocupid.Views.ProfilesIndex = Backbone.CompositeView.extend({
	template: JST['profiles/index'],

	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.collection, 'add', this.addProfile);
		this.listenTo(this.collection, 'remove', this.removeProfile);
		this.addSearchBar();
		this.addProfiles();
	},

	removeProfile: function (profile) {
		var profileView = $.grep(this.subviews()['.profiles-index'],
														 function(view) {return view.model.id === profile.id })[0];
		this.removeSubview('.profiles-index', profileView);
	},

	addSearchBar: function () {
		var searchBar = new Kocupid.Views.SearchBar({ parentView: this });
		this.addSubview('.search-bar', searchBar);
	},

	addProfile: function (profile) {
		var indexItem = new Kocupid.Views.ProfilesIndexItem({ model: profile });
		this.addSubview('.profiles-index', indexItem);
	},

	addProfiles: function () {
		this.collection.each(function (profile) {
			this.addProfile(profile);
		}.bind(this));
	},

	render: function () {
		var content = this.template({ profiles: this.collection });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});