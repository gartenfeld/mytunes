// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  // initialize: function() {
  //   var player = this;
  //   $(this.el).on('ended', function () {
  //     player.trigger('next');
  //   });
  // },

  initialize: function() {
    var self = this; //CODE 6 to 9 were added in class lecture.
    this.$el.on('ended', function(){
      self.model.ended();
    });
  },

  //ADDED
  // events: {
  //   'ended': function() {
  //     this.model.dequeue();
  //   }
  // },

  setSong: function(song){
    this.model = song;
    // this.$el.on('ended', function () {
    //   song.trigger('ended', this);
    // });
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
