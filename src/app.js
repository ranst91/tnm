//General required scripts
let angular = require('angular');
// require('jquery');
require('angular-ui-router');
require('ngstorage');
require('ngmap');
require('angular-animate');
require('angular-toastr');
//Configuration files
let router = require('./config/app.route.js');
let unauthorizedInterceptor = require('./config/app.interceptors');
let run = require('./config/app.run');

//Services
let authService = require('./services/auth.service');
let messageService = require('./services/messages.service');
let mapService = require('./services/map.service');

//Controllers and components
let home = require('./home/home.controller');
let login = require('./login/login.controller');
let mapComponent = require('./map/map.component');

//Initialize the app
angular.module('app', ["ui.router", "ngStorage", "ngMap", "toastr", "ngAnimate"])
    //Services
    .service('authService', authService)
    .service('messageService', messageService)
    .service('mapService', mapService)

    //Controllers
    .controller('HomeController', ['mapService', home])
    .controller('LoginController', ['authService', 'messageService', '$state', login])
    .component('gMap', mapComponent)

    //Configs
    .config(['$stateProvider', '$urlRouterProvider', router])
    .config(['$provide', '$httpProvider', unauthorizedInterceptor])
    .run(run);