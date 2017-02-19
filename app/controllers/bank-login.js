import Ember from 'ember';

var BankLoginController = Ember.Controller.extend({

message:null,
model:{},
actions:{

validateUserLogin:function(model){
	console.log('Login id: ' + model.customerid);
	console.log('Login password: ' + model.password);
	var response = Ember.$.getJSON('/login/validateLogin', {customerid:model.customerid, password:model.password} );
		response.then(function (result){
			console.log(result);
		}, function(reason){
			console.log(reason);
		});
},

navigateToRegistration: function(){
	this.transitionToRoute("bank-registration");

}


}


});

export default BankLoginController;
