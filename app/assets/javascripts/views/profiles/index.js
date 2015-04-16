Kocupid.Views.ProfilesIndex = Backbone.CompositeView.extend({
	template: JST['profiles/index'],
	events: {
		'click .load' : 'load'
	},

	initialize: function () {
		this.shownItems = new Kocupid.Collections.Profiles();
		this.allItems = new Kocupid.Collections.Profiles();
		this.loader = 'spinner';
		this.page = 0;
		this.load();

		this.addSearchBar();
		this.addProfiles();
		this.addSidebar();

		this.listenTo(this.collection, 'sync', this.render);
		this.listenTo(this.shownItems, 'add', this.addProfile);
		this.listenTo(this.shownItems, 'remove', this.removeProfile);
	},

	removeProfile: function (profile) {
		var profileView = $.grep(this.subviews()['.profiles-index'],
														 function(view) {return view.model.id === profile.id })[0];
		this.removeSubview('.profiles-index', profileView);
	},

	addSidebar: function () {
		var sidebar = new Kocupid.Views.Sidebar();
		this.addSubview('.sidebar', sidebar);
	},

	addSearchBar: function () {
		var searchBar = new Kocupid.Views.SearchBar({ collection: this.shownItems, fullCollection: this.allItems });
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

	addLoader: function () {
		if (this.loader === 'spinner') {
			this.$('.load').html('<div class="spinner"><div class="loader"></div></div>');
		} else if (this.loader === 'button') {
			this.$('.load').html('<div class="btn btn-large btn-primary">Load More Users</div>');
		}	else {
			this.$('.load').html('');
		}
	},

	load: function () {
		this.$('.load').html('<div class="spinner"><div class="loader"></div></div>');
		this.collection.fetch({ data: { page_number: this.page },
			success: function () {
				this.allItems.add(this.collection.models);
				this.subviews('.search-bar')[0].search();
				this.loader = 'button';
				if (this.collection.size() < 30) {
					this.loader = 'nothing'
				}
			}.bind(this)
		});
		this.page += 1;
	},

	render: function () {
		var content = this.template({ profiles: this.shownItems });
		this.$el.html(content);
		this.addLoader();
		this.attachSubviews();
		return this;
	}
});