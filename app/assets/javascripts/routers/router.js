Kocupid.Routers.Router = Backbone.Router.extend({
	routes: {
		'' : 'index',
		'profiles/:id' : 'show'
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		this.profiles = new Kocupid.Collections.Profiles();
		this.profiles.fetch();
	},

	index: function () {
		var profilesIndex = new Kocupid.Views.ProfilesIndex({ collection: this.profiles });
		this._swapView(profilesIndex);
	},

	show: function (id) {
		var profile = this.profiles.getOrFetch(id);
		var profileShow = new Kocupid.Views.ProfileShow({ model: profile });
		this._swapView(profileShow);
	},

	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});