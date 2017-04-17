import * as angular from 'angular';
require("!!style-loader!css-loader!sass-loader!./home.scss");
import HomeController from './home.controller';

const homeModule = angular.module("home-module", []);
homeModule.controller("homeController", HomeController)

export default homeModule;
