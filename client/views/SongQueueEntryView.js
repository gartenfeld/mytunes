// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName : 'tr',
  id: 'song',
  template : _.template('<td>(<%= artist %>)</td><td>(<%= title %>)</td>'),


  //ADDED
  events: {
    'click': 'dequeue'
  },

  events: {
    'click' : function(){
      this.model.dequeue();
    }
  },

  render : function(){
  	// console.log(this.model);
  	return this.$el.html(this.template(this.model.attributes));
  }


});
