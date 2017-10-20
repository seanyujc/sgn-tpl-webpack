import * as uiRooter from "@uirouter/angularjs";
import "./styles/common.scss";

import { module } from "angular";

import apiConfig from "./config/api.conf";
import siteConfig from "./config/site.conf";
import core from "./core/core.module";
import components from "./index.components";
import routes from "./index.routes";
import run from "./index.run";

import ngb = require("../lib/ng-bases");

// tslint:disable:no-submodule-imports
require("angular-i18n/angular-locale_zh-cn");
require("@uirouter/angularjs/release/stateEvents");

export let app = module("app", [
  uiRooter.default,
  "ui.router.state.events",
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
