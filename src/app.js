//General required scripts
let angular = require('angular');
require('jquery');
require('angular-ui-router');
require('ngstorage');
require('ngmap');
require('angular-animate');
require('angular-toastr');
//Configuration files
let router = require('./config/router');
let unauthorizedInterceptor = require('./config/interceptors');
let run = require('./config/run');

//Services
let AuthService = require('./services/Auth');
let MessageService = require('./services/MessageService');
let MapService = require('./services/MapService');

//Controllers and components
let Home = require('./home/Home');
let Login = require('./login/Login');
let map = require('./map/Map.component');

//Initialize the app
angular.module('app', ["ui.router", "ngStorage", "ngMap", "toastr", "ngAnimate"])
    //Services
    .service('AuthService', AuthService)
    .service('MessageService', MessageService)
    .service('MapService', MapService)

    //Controllers
    .controller('Home', Home)
    .controller('Login', ['AuthService', 'MessageService', '$state', Login])
    .component('m', map)

    //Configs
    .config(['$stateProvider', '$urlRouterProvider', router])
    .config(['$provide', '$httpProvider', unauthorizedInterceptor])
    .run(run);