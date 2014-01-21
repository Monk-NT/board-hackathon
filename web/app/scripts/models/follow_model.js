/*global Ember*/
Web.Follow = DS.Model.extend({
    usr: DS.attr('string'),

    follower: DS.attr('string')
});

// probably should be mixed-in...
Web.Follow.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Web.Follow.FIXTURES = [
  
  {
    id: 0,
    
    usr: 'foo',
    
    follower: 'foo'
    
  },
  
  {
    id: 1,
    
    usr: 'foo',
    
    follower: 'foo'
    
  }
  
];
