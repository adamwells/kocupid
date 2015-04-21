Kocupid.Views.ProfileShow = Backbone.CompositeView.extend({
	template: JST['profiles/show'],
	events: {
		'click .send-message' : 'messageUser',
		'click .edit' : 'editProfile'
	},

	initialize: function () {
		this.listenTo(this.model, 'sync change', this.render);
		this.listenTo(this.model, 'sync', this.addLikeButton);
		this.listenTo(this.model, 'sync', this.addBookmarkButton);
		this.listenTo(this.model, 'sync', this.createVisit);

		this.addSidebar();
	},

	createVisit: function () {
		var visit = new Kocupid.Models.Visit({ id: this.model.escape('visit_id'), visitee_id: this.model.escape('user_id') });
		debugger
		visit.save([],{});
	},

	addSidebar: function () {
		var sidebar = new Kocupid.Views.Sidebar();
		this.addSubview('.sidebar', sidebar);
	},

	messageUser: function () {
		var data = this.$('form').serializeJSON();
		data['recipient_username'] = this.model.get('username');
		var message = new Kocupid.Models.Message(data);
		message.save([], {
			success: function () {
				
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

	addBookmarkButton: function () {
		var bookmarkButton = new Kocupid.Views.BookmarkButton({ model: this.model });
		this.addSubview('.bookmark-toggle-button', bookmarkButton);
	},

	render: function () {
		var content = this.template({ profile: this.model });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
});