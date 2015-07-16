// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName : "table",

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
  	this.render();
  	this.collection.on('add', this.render, this);
  	this.collection.on('remove', this.render, this);
  },


    //ADDED
  render: function() {
  	this.$el.children().detach();

  	this.$el.html('<th>Queue</th>').append(
  		this.collection.map(function(song){
  			return new SongQueueEntryView({model:song}).render();
  		})
  };

  // renderSong : function(song){
  // 	var songQueueView = new SongQueueEntryView({model : song});

  // 	var $html = songQueueView.render();

  // 	this.$el.prepend($html); 
  // }

});
