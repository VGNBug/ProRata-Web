function prorataUserService($http, $rootScope) {

  this.get = function(emailHash, passwordHash) {
  	var url = $rootScope.serverPath + 'prorataUser/' + emailHash + '/' + passwordHash
  	console.log('Making HTTP GET request to ' + url);
    return $http.get(url);
  };

  this.post = function(prorataUser) {
  	var url = $rootScope.serverPath;
  	console.log('Making HTTP POST request to ' + url);
  	return $http.post(url);
  }
};

angular.module('app.services', [])

.service('prorataUserService', prorataUserService);

