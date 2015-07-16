// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    artist: 'artist',
    title: 'title',
    url: 'url',
    playCount : 0,
    img_url: 'img_url'
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount') + 1);
    // this.set('img_url', this.get('img_url') + 1)




  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  jump: function(){
    this.trigger('jump', this);
  }
});
