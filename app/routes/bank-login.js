import Ember from 'ember';

var BankLoginRoute =  Ember.Route.extend({
	
	renderTemplate() {
	    this.render('bank-login',{});
	  },
	
	 setupController(controller, model){
		 
		  controller.set('message', 'Welcome to bank'); 
		  
	 }
});

export default BankLoginRoute;
