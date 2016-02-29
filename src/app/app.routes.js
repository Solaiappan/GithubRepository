githubReposApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/github-repos', {
            templateUrl: 'app/components/github/githubReposView.html',
            controller: 'githubReposController'
        }).
        when('/about', {
            templateUrl: 'app/components/about/aboutView.html'
        }).
        otherwise({
            redirectTo: '/github-repos'
        });
    }]);