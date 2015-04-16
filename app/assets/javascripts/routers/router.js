Kocupid.Routers.Router = Backbone.Router.extend({
	routes: {
		'' : 'profilesIndex',
		'profiles' : 'profilesIndex',
		'profiles/:id/edit' : 'editProfile',
		'profiles/:id' : 'profileShow',
		'messages' : 'messagesIndex',
		'login' : 'loginForm'
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		this.profiles = new Kocupid.Collections.Profiles();
		this.messages = new Kocupid.Collections.Messages();
	},

	profilesIndex: function () {
		var profilesIndex = new Kocupid.Views.ProfilesIndex({ collection: this.profiles });
		this._swapView(profilesIndex);
	},

	profileShow: function (id) {
		var profile = this.profiles.getOrFetch(id);	
		var profileShow = new Kocupid.Views.ProfileShow({ model: profile });
		this._swapView(profileShow);
	},

	editProfile: function (id) {
		var profile = this.profiles.getOrFetch(id);
		var edit = new Kocupid.Views.EditProfile({ model: profile });
		this._swapView(edit);
	},

	messagesIndex: function () {
		var messagesIndex = new Kocupid.Views.MessagesIndex({ collection: this.messages });
		this._swapView(messagesIndex);
	},

	messageShow: function (id) {
		var message = this.messages.getOrFetch(id);
		var messageShow = new Kocupid.Views.MessageShow({ model: message });
		this._swapView(messageShow);
	},

	loginForm: function () {
		var form = new Kocupid.Views.LoginForm();
		this._swapView(form);
	},

	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});