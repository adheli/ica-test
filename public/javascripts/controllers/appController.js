'use strict';

angular
	.module('icaApp')
	.controller('appController', [
		'appService',
		'$scope',
		'$rootScope',
		'$timeout',
		'$window',
		'$mdToast',
		'$mdSidenav',
		'$mdDialog',
		appController
	]);

function appController(appService, $scope, $rootScope, $timeout, $window, $mdToast, $mdSidenav, $mdDialog) {
	$scope.loading = false;

	$scope.toggleRight = function() {
		return $mdSidenav('right').toggle();
	};

	$scope.close = function() {
		$mdSidenav('right').close();
	};

	$scope.isOpenRight = function() {
		return $mdSidenav('right').isOpen();
	};

	$scope.getProducts = () => {
		$scope.loading = true;

		return appService
			.list()
			.then((products) => {
				$scope.products = products;
			})
			.catch((err) => {
				$mdToast.show($mdToast.simple().textContent(err));
			})
			.finally(() => {
				$scope.loading = false;
			});
	};

	$scope.addProduct = (product) => {
		$scope.loading = true;

		return appService
			.create(product)
			.then((products) => {
				$scope.products = products;
				$mdSidenav('right').close();
				$mdToast.show($mdToast.simple().textContent('Product created'));
			})
			.catch((err) => {
				$mdToast.show($mdToast.simple().textContent(err));
			})
			.finally(() => {
				$scope.loading = false;
			});
	};

	$scope.removeProduct = (product) => {
		$scope.loading = true;

		return appService
			.remove(product)
			.then((products) => {
				$scope.products = products;
				$mdToast.show($mdToast.simple().textContent('Product removed'));
			})
			.catch((err) => {
				$mdToast.show($mdToast.simple().textContent(err));
			})
			.finally(() => {
				$scope.loading = false;
			});
	};

	$scope.editProduct = function(productEdit, ev) {
		// Appending dialog to document.body to cover sidenav in docs app
		var confirm = $mdDialog
			.prompt()
			.title('Editing a product')
			.textContent('Insert a new title for the product')
			.placeholder('product title')
			.ariaLabel('product title')
			.initialValue(productEdit.title)
			.targetEvent(ev)
			.required(true)
			.ok('Update')
			.cancel('Cancel');

		$mdDialog.show(confirm).then(
			function(result) {
				productEdit.title = result;
				return appService
					.edit(productEdit)
					.then((products) => {
						$scope.products = products;
						$mdToast.show($mdToast.simple().textContent('Product edited'));
					})
					.catch((err) => {
						$mdToast.show($mdToast.simple().textContent(err));
					})
					.finally(() => {
						$scope.loading = false;
					});
			},
			function() {}
		);
	};
}
