Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],

	initialize: function () {
		this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model, 'sync', this.addLikeButton);
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