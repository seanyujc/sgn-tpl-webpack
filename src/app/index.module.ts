import "../assets/styles/common.scss";

import { module } from "angular";

import apiConfig from "./config/api.conf";
import siteConfig from "./config/site.conf";
import core from "./core/core.module";
import components from "./index.components";
import routes from "./index.routes";
import run from "./index.run";

import ngb = require("ng-bases");

export let app = module("app", [
  require("angular-ui-router"),
  require("angular-animate"),
  require("angular-ui-bootstrap"),
  require("angular-sanitize"),
  require("angular-touch"),
  require("angular-iscroll").name,
  require("oclazyload"),
  components.name,
  ngb.sgNgBases.name,
  core.name,
  routes.name,
]);

console.log(components)

function AppMainController($scope: ng.IScope, iScrollService) {
  $scope.iScrollState = iScrollService.state;
}

AppMainController.$inject = ["$scope", "iScrollService"];
app.config(siteConfig).config(apiConfig).run(run).controller("AppMainController", AppMainController);
