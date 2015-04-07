Kocupid.Routers.Router = Backbone.Router.extend({
	routes: {
		'' : 'index'
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	index: function () {
		var profilesIndex = new Kocupid.Views.ProfilesIndex({ collection: this.profiles });
		this._swapView(profilesIndex);
	},

	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});