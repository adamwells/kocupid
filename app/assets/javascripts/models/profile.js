Kocupid.Models.Profile = Backbone.Model.extend({
	urlRoot: '/api/profiles',

	stylePreferences: function () {
		var prefs = [];
		if (this.get('looking_for_wrestler') === true) {
			prefs.push('Wrestlers');
		}

		if (this.get('looking_for_boxer') === true) {
			prefs.push('Boxers');
		}

		if (this.get('looking_for_mma_fighter') === true) {
			prefs.push('MMA Fighters');
		}

		if (this.get('looking_for_other_styles') === true) {
			prefs.push('Other Styles');
		}

		return prefs.join(', ');
	},

	genderPreferences: function () {
		var prefs = [];
		if (this.get('looking_for_men') === true) {
			prefs.push('Men');
		}

		if (this.get('looking_for_women') === true) {
			prefs.push('Women');
		}

		if (this.get('looking_for_other_genders') === true) {
			prefs.push('Other Gender Identities');
		}

		return prefs.join(', ');
	},

	partnerPreferences: function () {
		var prefs = [];
		if (this.get('looking_for_sparring_partner') === true) {
			prefs.push('Sparring Partners');	
		}

		if (this.get('looking_for_opponent') === true) {
			prefs.push('Opponents');
		}

		return prefs.join(', ');
	}
});