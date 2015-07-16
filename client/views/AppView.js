// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    var player = this.playerView;
    var app = this.model;

    this.playerView.on('next', function () {

      var songs = app.get('library').models;
      var currSong = player.model;
      var currURL = currSong.get('url');
      var itemURL;

      for (var i=0; i<songs.length; i++) {
        itemURL = songs[i].get('url');
        if (itemURL === currURL) {
          player.setSong(songs[i+1]);          
        }
      }

    });

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
