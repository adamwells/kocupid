Kocupid.Views.BookmarkButton = Backbone.View.extend({
	template: JST['profiles/_bookmark_button'],
	events: {
		'click button' : 'toggleButton'
	},

	toggleButton: function (event) {
		var button = $(event.target);
		button.prop('disabled', true);
		var profile = this.model;
		var view = this;
		var bookmark = new Kocupid.Models.Bookmark({ id: profile.get('bookmark_id') })

		if (bookmark.get('id') !== null) {
			bookmark.destroy({
				success: function () {
					profile.set('bookmark_id', null);
					button.prop('disabled', false);
					view.render();
				}
			});
		} else {
			bookmark.save({ bookmarkee_id: this.model.get('user_id') }, {
				success: function () {
					profile.set({ bookmark_id: bookmark.get('id') });
					button.prop('disabled', false);
					view.render();
				}
			});
		}
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
})