'use strict';

angular
  .module('icaApp')
  .controller('appController', 
    ['appService', '$scope', '$rootScope', '$timeout', '$window', '$mdToast', '$mdDialog', appController]);

function appController(appService, $scope, $rootScope, $timeout, $window, $mdToast, $mdDialog) {
  $scope.loading = false;

  $scope.getProducts = () => {
    $scope.loading = true;

    return appService.list()
    .then(products => {
      $scope.products = products;
      console.log(products);
    })
    .catch(err => {
      $mdToast.show($mdToast.simple().textContent(err));
    })
    .finally(() => { $scope.loading = false; });
  }

  $scope.addProduct = product => {
    $scope.loading = true;

    return appService.create(product)
    .then(product => {
      $mdToast.show($mdToast.simple().textContent("Product created"));
    })
    .catch(err => {
      $mdToast.show($mdToast.simple().textContent(err));
    })
    .finally(() => { $scope.loading = false; });
  }
}