Web.FollowRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('follow', params.follow_id);
  }
});

