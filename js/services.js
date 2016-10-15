function prorataUserService($http, $rootScope) {

  this.path = '/prorataUser';

  this.get = function(emailHash, passwordHash) {
    var url = $rootScope.serverPath + '/prorataUser/' + emailHash + '/' + passwordHash;
  	// var url = $rootScope.serverPath + this.path + '/' emailHash + '/' + passwordHash
  	console.log('Making HTTP GET request to ' + url);
    return $http.get(url);
  };

  this.post = function(prorataUser) {
  	var url = $rootScope.serverPath + '/prorataUser';
  	console.log('Making HTTP POST request to ' + url);
  	return $http.post(url, prorataUser);
  }

this.put = function(prorataUser, emailHash, passwordHash) {
    var url = $rootScope.serverPath + '/prorataUser/' + emailHash + '/' + passwordHash;
    console.log('Making HTTP PUT request to ' + url);
    return $http.put(url, prorataUser);
  }
};

angular.module('app.services', [])

.service('prorataUserService', prorataUserService);

