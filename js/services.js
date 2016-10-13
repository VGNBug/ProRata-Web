function prorataUserService($http, $rootScope) {

  this.get = function(emailHash, passwordHash) {
	  console.log($rootScope.serverPath + 'prorataUser/' + emailHash + '/' + passwordHash);
    return $http.get($rootScope.serverPath + 'prorataUser/' + emailHash + '/' + passwordHash);
  };
};

angular.module('app.services', [])

.service('prorataUserService', prorataUserService);

