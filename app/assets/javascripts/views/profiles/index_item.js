Kocupid.Views.ProfilesIndexItem = Backbone.View.extend({
	template: JST['profiles/index_item'],
	tagName: 'li',
	className: 'profiles-index-item',

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});