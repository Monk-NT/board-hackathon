/*global Ember*/
Web.Tweet = DS.Model.extend({
    tweetid: DS.attr('number'),

    tweet: DS.attr('string'),

    email: DS.attr('string'),

    crttime: DS.attr('string')
});

// probably should be mixed-in...
Web.Tweet.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});
