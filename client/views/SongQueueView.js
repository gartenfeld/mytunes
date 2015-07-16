// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName : "table",

 
  initialize: function(){
     var that = this;    
     this.collection.on("add", function(){
       that.render();
     });

     this.collection.on("remove", function(){
       that.render();
     });
  },


    //ADDED
  render: function() {
    	this.$el.html('<th>Queue</th>').append(
  		this.collection.map(function(song){
  			return new SongQueueEntryView({model:song}).render();
  		})
    );
  }

  // renderSong : function(song){
  // 	var songQueueView = new SongQueueEntryView({model : song});

  // 	var $html = songQueueView.render();

  // 	this.$el.prepend($html); 
  // }

});
