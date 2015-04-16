Kocupid.Views.Sidebar = Backbone.View.extend({
	template: JST['_sidebar'],
	events: {
		'click .logout' : 'logout'
	},

	logout: function () {
		$.ajax({
			url: '/session/0',
			type: 'DELETE'
		})
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});