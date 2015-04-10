Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],
	events: {
		'click .message' : 'messageUser'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model, 'sync', this.addLikeButton);
	},

	messageUser: function () {

	},

	addLikeButton: function () {
		var likeButton = new Kocupid.Views.LikeButton({ model: this.model });
		this.addSubview('.like-toggle-button', likeButton);
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});