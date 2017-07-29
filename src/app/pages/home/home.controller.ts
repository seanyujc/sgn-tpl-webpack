import { ICommon } from "../../core/services/common.service";

interface IHomeScope extends ng.IScope {
  title: string;
}
export default class HomeController {
  static $inject = ["$scope", "$rootScope", "$stateParams", "common"];
  constructor($scope: IHomeScope, $rootScope: ng.IRootScopeService, $stateParams: angular.ui.IStateParamsService, common: ICommon) {
    $scope.title = "Home Page";
  }
}
