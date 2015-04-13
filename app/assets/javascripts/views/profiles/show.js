Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],
	events: {
		'click .send-message' : 'messageUser',
		'click .edit' : 'editProfile'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model, 'sync', this.addLikeButton);
	},

	messageUser: function () {
		var data = this.$('form').serializeJSON();
		data['recipient_username'] = this.model.get('username');
		var message = new Kocupid.Models.Message(data);
		message.save([], {
			success: function () {
				alert('message sent');
			}
		})
	},

	editProfile: function () {
		window.router.navigate('profiles/' + this.model.id + '/edit', { trigger: true });
	},

	addLikeButton: function () {
		var likeButton = new Kocupid.Views.LikeButton({ model: this.model });
		this.addSubview('.like-toggle-button', likeButton);
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});