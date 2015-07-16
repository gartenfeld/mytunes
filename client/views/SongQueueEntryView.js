// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName : 'tr',
  className: 'song',
  template : _.template('<td><%- artist %></td><td><%- title %></td>'),

  events: {
    'click' : function(){
      this.model.jump();
    }
  },

  render : function(){
  	return this.$el.html(this.template(this.model.attributes));
  }

});
