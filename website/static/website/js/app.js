App = Ember.Application.create();

App.Router.map(function() {
    this.resource("sessions", {path: "/"});
});

App.SessionsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('session');
    }
});

App.Session = DS.Model.extend({
    name: DS.attr('string')
});

App.ApplicationAdapter = DS.DjangoRESTAdapter.extend({
    namespace: 'api'
});

App.SessionsController = Ember.ArrayController.extend({
    warning: false,
    actions: {
        show: function() {
            this.set('warning', true);
        }
    }
});

App.SessionsView = Ember.View.extend({
    didInsertElement: function() {
        this.$(".phone").mask("999-999-9999");
    }
});
