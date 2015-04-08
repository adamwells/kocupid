Kocupid.Views.ProfilesIndexItem = Backbone.View.extend({
	template: JST['profiles/index_item'],
	tagName: 'li',
	className: 'profiles-index-item',

	events: {
		'click .username' : 'visitProfile'
	},

	visitProfile: function (event) {
		event.preventDefault();
		window.router.navigate('profiles/' + this.model.id, { trigger: true });
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});