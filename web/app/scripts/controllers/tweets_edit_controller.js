Web.TweetsEditController = Ember.ObjectController.extend({
  needs: 'tweets',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.tweets.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('tweets',this.get('model'));
    }
  }
});

