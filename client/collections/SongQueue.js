// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  	this.on('add', function(){
  		if(this.length === 1){
  			this.playFirst();
  		}
  	});

  	this.on('dequeue', function(song){
  		this.remove(song);
  	});

  	this.on('ended', function(){
  		this.shift();
  		if(this.length >= 1){
  			this.playFirst();
  		}
  	});

    // this.on("ended", function(){
    //   if(this.length > 1){
    //     this.ended();
    //     this.playFirst();
    //   } else{
    //     this.ended();
    //   }
    // });

  },

  playFirst: function(){
  	// this.trigger('first');
  	this.at(0).play();
  },

  ended: function(){
    this.shift();
    this.length && this.playFirst();
  },

});