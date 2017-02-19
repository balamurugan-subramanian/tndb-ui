import Ember from 'ember';

var BankRegistrationRoute =  Ember.Route.extend({

renderTemplate() {
    this.render('bank-registration',{});
  },
setupController(controller, model){

   //controller.set('message', 'Welcome to bank');

}

});

export default BankRegistrationRoute;
