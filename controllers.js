(function() {
  'use strict';

  const app = angular.module('form-validation');

  app.controller('form-validation', function() {

    // this.validate = function(user) {
    //   console.log(user);
    // }

    this.submit = function(user) {
      this.user = user;
    }
  });
}());
