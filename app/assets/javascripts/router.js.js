// Generated by CoffeeScript 1.7.1
App.Router.reopen({
  location: 'auto',
  rootURL: '/'
});

App.Router.map(function() {
  return this.resource('leads', {
    path: '/'
  }, function() {
    return this.resource('lead', {
      path: 'leads/:id'
    }, function() {
      return this.route('edit');
    });
  });
});
