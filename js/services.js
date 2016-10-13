var baseUrl = 'http://prorata-api-staging.herokuapp.com/';

function prorataUserService($http) {
  this.get = function(emailHash, passwordHash) {
	  alert(baseUrl + 'prorataUser/' + emailHash + '+-++' +
      '+' +
      '2+/' + passwordHash);
    return $http.get(baseUrl + 'prorataUser/' + emailHash + '/' + passwordHash);
  };
};

angular.module('app.services', [])

.service('prorataUserService', prorataUserService);

