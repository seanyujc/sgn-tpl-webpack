import "../assets/styles/common.scss";

import { module } from 'angular';

import siteConfig from './config/site.conf'
import apiConfig from './config/api.conf'
import routes from './index.routes'
import core from './core/core.module'
import run from './index.run'

import ngb = require('ng-bases');

export let app = module('app', [
    require('angular-ui-router'),
    require('angular-animate'),
    require('angular-ui-bootstrap'),
    require('angular-sanitize'),
    require("angular-iscroll").name,
    require("oclazyload"),
    ngb.sgNgBases.name,
    core.name,
    routes.name
]);

function AppMainController($scope: ng.IScope, iScrollService) {
    $scope.iScrollState = iScrollService.state;
}

AppMainController.$inject = ['$scope', 'iScrollService'];
app.config(siteConfig).config(apiConfig).run(run).controller("AppMainController", AppMainController)
