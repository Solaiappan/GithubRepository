"use strict";
// Commented lines are just to show my view on this service
(function(services) {
   services.factory('apiService', ['$http', function ($http) {
      var url;//, method;
      return {

         //setUrl: function(value) {
         //   url = value;
         //   return this;
         //},
         //setMethod: function(value) {
         //   value = value || 'get';
         //   method = value;
         //   return this;
         //},
         get: function (options) {
            options = options || {};
            var getUrl = options.url || url;
            var config = options.config || null;
            return $http.jsonp(getUrl, config);
         }//,
         //post: function (options) {
         //   var postUrl = options.url || url;
         //   var config = options.config || null;
         //   var data = options.data || {};
         //   return $http.post(postUrl, data, config);
         //}

      };
   }]);
}(sharedServices));

