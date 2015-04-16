Kocupid.Views.RegisterForm = Backbone.View.extend({
	template: JST['users/new'],
	events: {
		'click .login' : 'login',
		'submit' : 'createUser'
	},

	login: function () {
		window.router.navigate('', { trigger: true });
	},

	createUser: function () {
		var data = this.$('form').serializeJSON();
		var user = new Kocupid.Models.User();
		user.save(data, {
			success: function () {
				window.navigate('', { trigger: true })
			}
		})
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});