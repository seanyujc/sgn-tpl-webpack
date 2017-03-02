import * as angular from 'angular';
import "./home.scss"
import homeController from './home.controller';

const homeModule = angular.module("home-module", []);
homeModule.controller("homeController", homeController)

export default homeModule;