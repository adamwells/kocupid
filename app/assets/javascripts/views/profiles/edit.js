Kocupid.Views.EditProfile = Backbone.CompositeView.extend ({
	template: JST['profiles/edit'],
	tagName: 'form',
	events: {
		'click .save' : 'submitForm',
		'click .filepicker' : 'filepick'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);

		this.addNavbar();
	},

	addNavbar: function () {
		var navbar = new Kocupid.Views.Navbar();
		this.addSubview('.navbar', navbar);
		console.log('this')
	},

	submitForm: function (event) {
		event.preventDefault();
		var data = this.$el.serializeJSON({checkboxUncheckedValue: "off"});

		for (var k in data) {
			if (!data[k]) {
				delete data[k];
			}

			if (data[k] === "on") {
				data[k] = true;
			}

			if (data[k] === "off") {
				data[k] = false;
			}			
		}

		this.model.save(data, {
			success: function () {
				window.router.navigate('profiles/' + this.model.get('id'), { trigger: true })
			}.bind(this)
		});
	},

	filepick: function () {
		event.preventDefault();
		filepicker.pick(
		  function(Blob){
		    this.model.set({ photo_url: Blob.url })
		    this.render();
		  }.bind(this)
		);
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});