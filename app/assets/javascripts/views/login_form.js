Kocupid.Views.LoginForm = Backbone.CompositeView.extend({
	template: JST['session/login_form'],
	events: {
		'submit form' : 'login',
		'click .register' : 'register'
	},

	login: function (event) {
		event.preventDefault();
		var data = this.$('form').serializeJSON();
		$.ajax({
			type: 'POST',
			url: '/session',
			data: { session: data },
			success: function (response) {
				Kocupid.currentUserId = response['user_id'];
				Kocupid.currentProfileId = response['profile_id']
				window.router.navigate('profiles', { trigger: true });
			},

			error: function (response) {
				Kocupid.flash = response.responseJSON['message'];
				this.render();
			}.bind(this)
		})
	},

	register: function () {
		window.router.navigate('register', { trigger: true })
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});