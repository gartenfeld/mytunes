// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
  	this.collection.on('change', this.render());
  },

  render: function() {
  	this.collection.forEach(this.renderSong, this);
  },

  renderSong : function(song){
  	var songQueueView = new SongQueueEntryView({model : song});

  	var $html = songQueueView.render();

  	this.$el.prepend($html); 
  }

});
