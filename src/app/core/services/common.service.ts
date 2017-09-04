import * as angular from "angular";

export interface ICommon {
  // XBP-NM-SI-NO-DELETE
  showConfirm(msg: string): angular.ui.bootstrap.IModalServiceInstance;
  trim(str: string): string;
  showMsg(msg: string): angular.ui.bootstrap.IModalServiceInstance;
  showPadUpward(
    html: string, controller?: string | Function | Array<string | Function>,
    resolve?: { [key: string]: string | Function | Array<string | Function> | object }): angular.ui.bootstrap.IModalServiceInstance;
  validMobileByRegular(mobile: string): boolean;
  openShareHand(): angular.ui.bootstrap.IModalServiceInstance;
}

export class CommonService implements ICommon {
  static $inject = ["$q", "$rootScope", "$uibModal"];
  constructor(private $q: ng.IQService, private $rootScope: ng.IRootScopeService, private $uibModal: angular.ui.bootstrap.IModalService) {

  }
  // XBP-NM-SF-NO-DELETE
  showConfirm(msg: string): angular.ui.bootstrap.IModalServiceInstance {
    const uibModalInstance = this.$uibModal.open({
      windowTopClass: "confirm-modal",
      backdropClass: "confirm-backdrop",
      template: `<p class="container-fluid">${msg}</p>
<ul class="list-inline container-fluid">
  <li class="col-xs-6 text-center"><button class="btn btn-success btn-lg" type="button" ng-click="ok()">确定</button></li>
  <li class="col-xs-6 text-center"><button class="btn btn-default btn-lg" type="button" ng-click="cancel()">取消</button></li>
</ul>`,
      controller: ["$scope", "$uibModalInstance",
        ($scope, $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) => {
          $scope.ok = $uibModalInstance.close;
          $scope.cancel = $uibModalInstance.dismiss;
        }],
    });
    uibModalInstance.result.then(angular.noop, angular.noop);
    return uibModalInstance;
  }
  trim(str: string): string {
    return str && str.replace(/^\s|\s$/, "");
  }
  openShareHand() {
    return this.$uibModal.open({
      animation: false,
      windowTopClass: "full-scan-modal",
      templateUrl: require("!!file-loader?name=templates/popup/[name].[ext]!./tpl/share.tpl.html"),
      controller: ["$scope", "$uibModalInstance", ($scope, $uibModalInstance: angular.ui.bootstrap.IModalServiceInstance) => {
        $scope.close = $uibModalInstance.close;
      }],
    });
  }
  validMobileByRegular(mobile: string): boolean {
    const exp = /^(\+86|86)?[1]\d{10}$/;
    return mobile.search(exp) !== -1;
  }
  showMsg(msg: string): angular.ui.bootstrap.IModalServiceInstance {
    const uibModalInstance = this.$uibModal.open({
      windowTopClass: "msg-modal",
      template: `<div style="padding: 30px 20px; font-size: 24px;  color: #000000"><p>${msg}</p></div>`,
    });
    uibModalInstance.result.then(angular.noop, angular.noop);
    return uibModalInstance;
  }
  showPadUpward(
    url: string, controller: string | Function | Array<string | Function>,
    resolve?: { [key: string]: string | Function | Array<string | Function> | Object }) {

    const uibModalInstance = this.$uibModal.open({
      windowTopClass: "upward-modal",
      templateUrl: url,
      controller,
      resolve,
    });
    uibModalInstance.result.then(angular.noop, angular.noop);
    return uibModalInstance;
  }

}
