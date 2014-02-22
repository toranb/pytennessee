App = Ember.Application.create();

App.Router.map(function() {
    this.resource("sessions", {path: "/"});
});

App.SessionsRoute = Ember.Route.extend({
    model: function() {
        var first = {name: 'first'};
        var last = {name: 'last'};
        return [first, last];
    }
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
