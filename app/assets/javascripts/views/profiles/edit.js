Kocupid.Views.EditProfile = Backbone.CompositeView.extend ({
	template: JST['profiles/edit'],
	tagName: 'form',
	events: {
		'click .save' : 'submitForm'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	submitForm: function (event) {
		event.preventDefault();
		var data = this.$el.serializeJSON();
		console.log(data);
		this.model.save(data {
			success: function () {
				window.router.navigate('profiles/' + this.model.get('id'), { trigger: true })
			}.bind(this)
		});
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		return this;
	}
});