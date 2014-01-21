/*global Ember*/
Web.Tweets = DS.Model.extend({
    tweetid: DS.attr('number'),

    tweet: DS.attr('string'),

    email: DS.attr('string'),

    crttime: DS.attr('string')
});

// probably should be mixed-in...
Web.Tweets.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Web.Tweets.FIXTURES = [
  
  {
    id: 0,
    
    tweetid: 'foo',
    
    tweet: 'foo',
    
    email: 'foo',
    
    crttime: 'foo'
    
  },
  
  {
    id: 1,
    
    tweetid: 'foo',
    
    tweet: 'foo',
    
    email: 'foo',
    
    crttime: 'foo'
    
  }
  
];
