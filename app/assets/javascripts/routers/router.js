Kocupid.Routers.Router = Backbone.Router.extend({
	routes: {
		'' : 'loginForm',
		'profiles' : 'profilesIndex',
		'profiles/:id/edit' : 'editProfile',
		'profiles/:id' : 'profileShow',
		'messages' : 'messagesIndex',
		'login' : 'loginForm',
		'register' : 'registerForm'
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		this.profiles = new Kocupid.Collections.Profiles();
		this.messages = new Kocupid.Collections.Messages();
	},

	profilesIndex: function () {
		var profilesIndex = new Kocupid.Views.ProfilesIndex({ collection: this.profiles });
		this._swapView(profilesIndex);
		this.ensureLoggedIn();
	},

	profileShow: function (id) {
		var profile = this.profiles.getOrFetch(id);	
		var profileShow = new Kocupid.Views.ProfileShow({ model: profile });
		this._swapView(profileShow);
		this.ensureLoggedIn();
	},

	editProfile: function (id) {
		var profile = this.profiles.getOrFetch(id);
		var edit = new Kocupid.Views.EditProfile({ model: profile });
		this._swapView(edit);
		this.ensureLoggedIn();
	},

	messagesIndex: function () {
		var messagesIndex = new Kocupid.Views.MessagesIndex({ collection: this.messages });
		this._swapView(messagesIndex);
		this.ensureLoggedIn();
	},

	loginForm: function () {
		var form = new Kocupid.Views.LoginForm();
		this._swapView(form);
	},

	registerForm: function () {
		var form = new Kocupid.Views.RegisterForm();
		this._swapView(form);
	},

	ensureLoggedIn: function () {
		if (!Kocupid.currentUserId) {
			window.router.navigate('', { trigger: true });
		}
	},

	_swapView: function (view) {
		this.currentView && this.currentView.remove();
		this.currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});