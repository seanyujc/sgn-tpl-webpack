slideComponent.$inject = ["$log"];

function slideComponent($log: ng.ILogService) {
  const directive: ng.IDirective = {
    restrict: "E",
    scope: {
    },
    templateUrl: require("!!file-loader?name=templates/[name].[ext]!./slide.html"),
    controller: slideController,
  }

  return directive;

  function slideController() {
    console.log(123);
  }

}
export default slideComponent;
