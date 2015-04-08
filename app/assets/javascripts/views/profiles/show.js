Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],

	initialize: function () {
		this.listenTo(this.model, 'sync change', this.render);
	},

	likeProfile: function (arguments) {
		var like = new Kocupid.Models.Like({ likee_id: this.model.get('user_id') });
		like.save({
			success: function () {
				console.log('Toggle button to unlike');
			}
		});
	},

	addLikeButton: function () {
		var likeButton = new Kocupid.Views.LikeButton({ model: this.model });
		this.addSubview('.like-toggle-button', likeButton);
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		this.addLikeButton();
		return this;
	}
});