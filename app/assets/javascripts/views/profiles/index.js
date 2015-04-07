Kocupid.Views.ProfilesIndex = Backbone.CompositeView.extend({
	template: JST['profiles/index'],

	initialize: function () {
		this.listenTo(this.collection, 'sync', this.render);
	},

	addProfile: function (profile) {
		var indexItem = new Kocupid.Views.ProfilesIndexItem({ model: profile });
		this.addSubview('.profiles-list', indexItem);
	},

	addProfiles: function () {
		this.collection.each(function (profile) {
			this.addProfile(profile);
		}.bind(this));
	},

	render: function () {
		var content = this.template({ profiles: this.collection });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});