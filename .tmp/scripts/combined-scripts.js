(function() {

var BoardHackathon = window.BoardHackathon = Ember.Application.create();

/* Order and include as you please. */


})();

(function() {

BoardHackathon.ApplicationAdapter = DS.FixtureAdapter;


})();

(function() {

BoardHackathon.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['tweet', 'tweets', 'followers', 'signout'];
    }
});


})();