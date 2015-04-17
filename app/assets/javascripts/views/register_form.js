Kocupid.Views.RegisterForm = Backbone.View.extend({
	template: JST['users/new'],
	events: {
		'click .login' : 'login',
		'submit' : 'createUser'
	},

	login: function () {
		window.router.navigate('', { trigger: true });
	},

	createUser: function (event) {
		event.preventDefault();
		var data = this.$('form').serializeJSON();
		var user = new Kocupid.Models.User();

		$.ajax({
			type: 'POST',
			url: '/users',
			data: data,
			success: function (response) {
				window.router.navigate('', { trigger: true })
			},

			error: function (response) {
				Kocupid.flash = response.responseJSON['messages'];
				this.render();
			}.bind(this)

		})
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});