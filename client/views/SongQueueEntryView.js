// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName : 'tr',
  className: 'song',
  template : _.template('<td><%- artist %></td><td><%- title %></td>'),

  events: {
    'click' : function(){
      // should not dequeue
      // but move the song to the top of queue 
      // and play it
      this.model.movetotop();
      // console.log(this.get('songQueue')
    }
  },

  render : function(){
  	return this.$el.html(this.template(this.model.attributes));
  }

});
