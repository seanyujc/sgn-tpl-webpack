import * as angular from "angular";
import slideDirective from "./slide.directive";
import "./slide.scss";

const slideModule = angular.module("slide-module", []);

slideModule.directive("slide", slideDirective);

export default slideModule;
