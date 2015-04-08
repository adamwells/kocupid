Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],
	events: {
		'click .like' : 'likeProfile'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model, 'sync', this.print);
	},

	print: function () {
		console.log(this.model.attributes);
	},

	likeProfile: function (arguments) {
		var like = new Kocupid.Models.Like({ likee_id: this.model.id });
		like.save({
			success: function () {
				console.log('Toggle button to unlike');
			}
		});
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});