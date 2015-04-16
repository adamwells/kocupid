Kocupid.Views.LoginForm = Backbone.View.extend({
	template: JST['session/login_form'],
	events: {
		'submit form' : 'login'
	},

	login: function (event) {
		event.preventDefault();
		console.log('success')
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});