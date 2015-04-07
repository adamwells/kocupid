window.Kocupid = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	window.router = new Kocupid.Routers.Router({ $rootEl: $('#content')});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  Kocupid.initialize();
});
