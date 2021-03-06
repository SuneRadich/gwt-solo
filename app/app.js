import modernizr from 'modernizr';
import angular from 'angular';
import 'angular-animate';
import uiRouter from '@uirouter/angularjs';
import $ from 'jquery';

import 'vendor/foundation/foundation.scss';

//Import foundation javascript
import "vendor/foundation/foundation";

import './app.scss';

import components from './components/components';
import controller from './app.controller';
import appConfig from './app.config';

//Services
import dataService from './services/data.service';
import helperService from './services/helper.service';

var app = angular.module('app', ['ui.router', 'components', 'ngAnimate']);

app
    .config(appConfig)
    .service('dataService', dataService)
    .service('helperService', helperService)
	.controller('appController', controller)

angular.bootstrap(document, ['app']);

$(document).ready(function() {
	//Initialize foundation
	$(document).foundation();
});

export default app;
