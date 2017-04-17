import * as angular from "angular";
require("./index.module");
import { appendSvg } from "../assets/fonts/iconfont";

angular.element(document).ready(() => {
  appendSvg();
  angular.element(document.getElementById("loading")).remove();
  angular.bootstrap(document, ["app"], {
    strictDi: true,
  });
});
