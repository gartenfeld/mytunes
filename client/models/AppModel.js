// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. 
    The handlers end up getting called from the window (unless we override it, as we do here). */

    var app = this;

    params.library.on('play', function(song){
      app.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){ 
    //   this.get('songQueue').add(song);
    //   if(this.get('songQueue').length === 1) {
    //     this.get('songQueue').playFirst();
    //   }
    // }, this);
      // console.log('enqueue triggered', song)
      this.get('songQueue').add(song);
      // console.log(this.get('songQueue'))
    }, this);


    // params.library.on('ended', function(song){ 
    //   this.get('songQueue').at(0).dequeue();
    // }, this);
  
    // app.get('songQueue').on('first', function () {
    //   var queue = app.get('songQueue');
    //   app.set('currentSong', queue.at(0));
    // });

    // app.get('songQueue').on('add', function () {
    //   var queue = app.get('songQueue');
    //   var first = queue.at(0);
    //   console.log(first);
    //   if (queue.length === 1){
    //     first.play();
    //   }
    // }); 

    // params.library.on('dequeue', function(){
    //   console.log(this.get('songQueue'));
    //   this.get('songQueue').remove(this.get('songQueue').at(0));
    //   console.log(this.get('songQueue'));
    // }, this);
  }
  
});
