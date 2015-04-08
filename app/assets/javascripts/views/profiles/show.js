Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
		this.listenTo(this.model, 'sync', this.print);
	},

	print: function () {
		console.log(this.model.attributes);
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});