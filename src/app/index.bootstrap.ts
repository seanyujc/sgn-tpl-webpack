// import * as angular from 'angular'
import * as angular from 'angular';
require ("./index.module");
angular.element(document).ready(() => {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
});