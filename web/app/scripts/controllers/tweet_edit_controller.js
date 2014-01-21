Web.TweetEditController = Ember.ObjectController.extend({
  needs: 'tweet',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.tweet.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('tweet',this.get('model'));
    }
  }
});

