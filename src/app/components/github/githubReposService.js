"use strict";

(function(services) {
    services.factory('githubReposService', ['apiService', 'helper', '$q',
        function (apiService, helper, $q) {
            var url = "https://api.github.com/users/%s/repos?callback=JSON_CALLBACK";
            return {
              load: function(userName) {
                  var deferred = $q.defer(),
                      manipulatedResponse = [{}];
                  apiService.get({ url: helper.formatString(url, userName)}).then(function (response) {
                      var data = response.data.data;
                      if(data.length > 0) {
                          manipulatedResponse = data.map(function (item) {
                              return {name: item.name, url: item.html_url, fullName: item.full_name};
                          });
                      } else if (data.length === 0) {
                          manipulatedResponse[0].name = "No Entites";
                      } else if (data.message) {
                          manipulatedResponse[0].name = 'The User "' + userName + '" is ' + data.message;
                      }
                      deferred.resolve.apply(null, [manipulatedResponse]);
                  }, function(reason) {
                      manipulatedResponse[0].name = reason;
                      deferred.reject.apply(null, [manipulatedResponse]);
                  });
                  return deferred.promise;
              }
            }
        }]);
}(componentServices));

