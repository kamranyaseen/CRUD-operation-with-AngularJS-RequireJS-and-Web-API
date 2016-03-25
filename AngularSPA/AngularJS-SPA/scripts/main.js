﻿require.config({
    baseurl: '/scripts/',
    paths: {
        'angular': 'libs/angular',
        'ngStorage': 'libs/ngStorage',
        'ngCookies': 'libs/angular-cookies',
        'ui-router': 'libs/angular-ui-router',
        'jquery': 'libs/jquery-1.10.2',
        'bootstrap': 'libs/bootstrap',
        'service': 'services/service',
        'homeCtrl': "controllers/homeCtrl",
        'accountCtrl': "controllers/accountCtrl",
        'filter': "filters/filter",
    },
    shim: {
        ngStorage: {
            deps: ['angular'],
            exports: 'angular'
        },
        ngCookies: {
            deps: ['angular'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'angular'
        },
        angular: {
            exports: 'angular'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    deps: ['app']
});

require([
    "app",
    "filter",
    "bootstrap",
    "homeCtrl",
    "accountCtrl"
],

    function (app) {
        //bootstrapping app
        app.init();
    }
);