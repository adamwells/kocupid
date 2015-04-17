Kocupid.Views.ProfilesIndexItem = Backbone.CompositeView.extend({
	template: JST['profiles/index_item'],
	tagName: 'li',
	className: 'profiles-index-item',

	events: {
		'click' : 'visitProfile',
		'click .like-toggle-button' : 'likeToggle',
	},

	initialize: function () {
		this.addLikeButton();
	},

	visitProfile: function (event) {
		event.preventDefault();
		window.router.navigate('profiles/' + this.model.id, { trigger: true });
	},

	addLikeButton: function () {
		this.button = true;
		var likeButton = new Kocupid.Views.LikeButton({ model: this.model });
		this.addSubview('.like-toggle-button', likeButton);
	},

	likeToggle: function (event) {
		event.stopPropagation();
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});