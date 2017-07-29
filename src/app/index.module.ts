import "../assets/styles/common.scss";

import { module } from "angular";

import apiConfig from "./config/api.conf";
import siteConfig from "./config/site.conf";
import core from "./core/core.module";
import components from "./index.components";
import routes from "./index.routes";
import run from "./index.run";

import ngb = require("ng-bases");

require("angular-i18n/angular-locale_zh-cn");

export let app = module("app", [
  require("angular-ui-router"),
  require("angular-animate"),
  require("../lib/angular-ui-bootstrap"),
  require("angular-sanitize"),
  require("angular-touch"),
  require("angular-iscroll").name,
  require("oclazyload"),
  components.name,
  ngb.sgNgBases.name,
  core.name,
  routes.name,
]);

AppMainController.$inject = ["$scope", "iScrollService"];
function AppMainController($scope, iScrollService) {
  $scope.iScrollState = iScrollService.state;
}

app.config(siteConfig).config(apiConfig).run(run).controller("AppMainController", AppMainController);
