Kocupid.Views.Navbar = Backbone.View.extend({
	template: JST['_navbar'],
	events: {
		'click .logout' : 'logout'
	},

	logout: function () {
		var session = new Kocupid.Models.Session({ id: Kocupid.currentUserId });
		session.destroy();
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
});