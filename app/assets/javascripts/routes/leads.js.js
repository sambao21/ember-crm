// Generated by CoffeeScript 1.7.1
App.LeadsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('lead');
  }
});