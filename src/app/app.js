var app = angular.module('studentAdmissions', ['ui.router', 'formio', 'ngFormioHelper']);

app.config(function($stateProvider, $urlRouterProvider, FormioProvider, FormioAuthProvider){

  $urlRouterProvider.otherwise('/');

  FormioProvider.setBaseUrl('https://iaxaeyjlwdkrzkx.form.io');
  FormioAuthProvider.setForceAuth(true);
  FormioAuthProvider.setStates('auth.studentLogin', 'home');
  FormioAuthProvider.register('studentRegister', 'user', 'register')
  FormioAuthProvider.register('studentLogin', 'user', 'login/student')
  FormioAuthProvider.register('adminLogin', 'admin', 'login/admin')


  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "views/home.html"
    })

})

app.run(function(FormioAuth) {
  // Initialize the Form.io authentication provider.
  FormioAuth.init();
});
