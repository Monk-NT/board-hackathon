Web.FollowEditController = Ember.ObjectController.extend({
  needs: 'follow',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.follow.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('follow',this.get('model'));
    }
  }
});

