Kocupid.Views.Sidebar = Backbone.CompositeView.extend({
	template: JST['_sidebar'],
	events: {
		'click .matches' : 'matches',
		'click .messages' : 'messages',
		'click .profile' : 'profile',
		'click .logout' : 'logout'
	},

	initialize: function () {
		this.addVisits();
	},

	matches: function () {
		window.router.navigate('profiles', { trigger: true });
	},

	addVisits: function () {
		var visits = new Kocupid.Views.VisitedPanel();
		this.addSubview('.visits', visits);	
	},

	messages: function () {
		window.router.navigate('messages', { trigger: true });
	},

	profile: function () {
		window.router.navigate('profiles/' + Kocupid.currentUserId, { trigger: true });
	},

	logout: function () {
		$.ajax({
			url: '/session/0',
			type: 'DELETE',
			success: function () {
				Kocupid.currentUserId = null;
				window.router.navigate('', { trigger: true });
			},
		})
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});