Web.Router.map(function () {
  
  this.resource('follows', function(){
    this.resource('follow', { path: '/:follow_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('tweets', function(){
    this.resource('tweet', { path: '/:tweet_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('tweets', function(){
    this.resource('tweet', { path: '/:tweet_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
  this.resource('users', function(){
    this.resource('user', { path: '/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
