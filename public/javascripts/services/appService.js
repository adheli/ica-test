'use strict';

angular
  .module('icaApp')
  .factory('appService', ["$http", appService]);

function appService($http) {
  return {
    list: list,
    add: add,
    edit: edit,
    remove: remove
  }

  function list() {
    return $http.get("/products")
    .then(response => {
      console.log(response);
      return [];
    });
  }

  function add() {

  }

  function edit() {

  }

  function remove() {

  }
}