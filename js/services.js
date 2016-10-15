function prorataUserService($http, $rootScope) {

  this.get = function(emailHash, passwordHash) {
  	var url = $rootScope.serverPath + 'prorataUser/' + emailHash + '/' + passwordHash
  	console.log('Making HTTP GET request to ' + url);
    return $http.get(url);
  };
};

angular.module('app.services', [])

.service('prorataUserService', prorataUserService);

