// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName : "table",
  id: "queue", 
  template: _.template('<td><%= artist %></td><td><%= title %></td><td><%= playCount %></td>'),
 
  initialize: function(){
     this.collection.on("add", function(){
       this.render();
     }, this);

     this.collection.on("remove", function(){
       this.render();
     }, this);
  },

  //ADDED
  render: function() {
    this.$el.children().detach();



  	this.$el.html('<th class="heading">Playlist</th>').append(
		  this.collection.map(function(song){
  			return new SongQueueEntryView({model:song}).render();
  		})
    );

  },

});
