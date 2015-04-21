Kocupid.Views.VisitedPanel = Backbone.View.extend({
	template: JST['visits/index'],
	tagName: 'ul',
	className: 'visits',
	initialize: function () {
		this.collection = new Kocupid.Collections.Visits();
		this.collection.fetch({
			success: function () {
				this.render();
			}.bind(this)
		})
	},

	render: function () {
		var content = this.template({ visits: this.collection });
		this.$el.html(content);
		return this;
	}
})