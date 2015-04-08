Kocupid.Views.LikeButton = Backbone.View.extend({
	template: JST['profiles/_like_button'],
	events: {
		'click' : 'toggleButton'
	},

	toggleButton: function (event) {
		var profile = this.model;
		var like = new Kocupid.Models.Like({ id: profile.get('like_id') })
		
		if (like.get('id') !== null) {
			like.destroy({
				success: function () {
					profile.set('like_id', null);
				}
			});
		} else {
			like.save({ likee_id: this.model.get('user_id') }, {
				success: function () {
					profile.set({ like_id: like.get('id') });
				}
			});
		}

		this.render();
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});