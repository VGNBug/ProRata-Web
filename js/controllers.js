angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $state, $stateParams) {
	console.log($stateParams.prorataUser);

	$scope.prorataUser = $stateParams.prorataUser;
})
   
.controller('cartCtrl', function($scope) {

})
   
.controller('cloudCtrl', function($scope) {

})
      
.controller('signInCtrl', function($scope, $http, $state, $stateParams, prorataUserService) {
	
	$scope.prorataUser = {};

	/**
	 * Encodes a string into a Hash.
	 */
	var getHash = function(encodeString) {
		return encodeString; // TODO encode the String
	};
	
	$scope.signIn = function() {
		
		var emailHash = getHash($scope.prorataUser.email);
		var passwordHash = getHash($scope.prorataUser.password);
		
		prorataUserService.get(emailHash, passwordHash)
		.then(function(response) {
			$state.go('home', {'prorataUser': response.data});
		}, function(error) {
			console.log('HTTP GET request failed. Error code: ' + error.status + ', status: ' + error.statusText + ', reason: ' + error.data.message);
			alert(error.data.message);
		});
	};

	$scope.createUser = function() {
		$scope.prorataUser.password = "";
		$state.go('createOrUpdateUser', {'prorataUser': $scope.prorataUser}); // TODO pass email in a prorataUser
	}
	
})
   
.controller('createOrUpdateUserCtrl', function($scope, $stateParams, $state, prorataUserService) {
	console.log($stateParams.prorataUser);
	$scope.prorataUser = $stateParams.prorataUser;

	$scope.createUser = function() {
		console.log($scope.prorataUser);
		prorataUserService.post($scope.prorataUser)
		.then(function(response) {
			$state.go('home', {'prorataUser': response.data});
		}, function(error) {
			console.log('HTTP POST request failed. Error code: ' + error.status + ', status: ' + error.statusText + ', reason: ' + error.data.message);
			alert(error.data.message);
		});
	}
})
 