Kocupid.Collections.Profiles = Backbone.Collection.extend({
	url: '/api/profiles',
	model: Kocupid.Models.Profile,

	getOrFetch: function (id) {
		var profile = this.find(id);
		var profiles = this;
		
		if (!profile) {
			profile = new Kocupid.Models.Profile({ id: id });
			profile.fetch({
				success: function () {
					profiles.add(profile);
				}
			});
		} else {
			profile.fetch();
		}

		return profile;
	}
});