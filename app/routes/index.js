import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
	
	beforeModel: function() {
		this.transitionTo('bank-login');
	  }
});

export default IndexRoute;