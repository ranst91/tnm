module.exports = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('main', {
            abstract: true,
            url: '/',
            template: '<div ui-view></div>',
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController as vm',
        })
        .state('login', {
            url: '/auth/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController as vm'
        });
};

