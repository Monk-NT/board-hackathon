/*global Ember*/
Web.User = DS.Model.extend({
    email: DS.attr('string'),

    name: DS.attr('string'),

    password: DS.attr('string')
});

// probably should be mixed-in...
Web.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});