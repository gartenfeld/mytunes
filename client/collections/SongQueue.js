// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  	this.on('add', function(){
  		if(this.length === 1){
  			this.playFirst();
  		}
  	}, this);

  	this.on('dequeue', function(song){
  		this.remove(song);
  	}, this);

  	this.on('ended', function(){
  		this.shift();
  		if(this.length){
  			this.playFirst();
  		}
  	}, this);

    this.on('movetotop', function(song){
      console.log('movetotop');

    }, this)

  },

  playFirst: function(){
  	this.at(0).play();
  },

  ended: function(){
    this.shift();
    this.length && this.playFirst();
  }

});