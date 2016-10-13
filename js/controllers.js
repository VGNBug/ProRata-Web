angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope, $state, $stateParams) {

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
			alert(response.data.message);
			$state.go('home'/*, {referer: $state.current.name}*/);
		}, function(error) {
			alert('HTTP GET request failed: ' + error.status + ': ' + error.statusText);
		});
	};
	
})
   
.controller('createAccountCtrl', function($scope) {

})
 
