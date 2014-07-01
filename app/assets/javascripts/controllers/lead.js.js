// Generated by CoffeeScript 1.7.1
App.LeadController = Ember.ObjectController.extend({
  actions: {
    saveChanges: function() {
      if (this.get('model.isDirty')) {
        return this.get('model').save();
      }
    }
  },
  showUnsavedMessage: (function() {
    return this.get('isDirty') && !this.get('isSaving');
  }).property('isDirty', 'isSaving'),
  isEditing: false
});
