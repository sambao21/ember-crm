// Generated by CoffeeScript 1.7.1
App.LeadRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('lead', params.id);
  }
});
