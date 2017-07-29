// import * as ngb from "ng-bases/dts";
import ngb = require("ng-bases");
import { Common } from "../core/common";

const siteConfig = (serverConfigProvider: ngb.IServerConfigProvider) => {

  const dev: ngb.Site = { local: "dh5.duileme.cn", remote: "dapi.duileme.cn", appID: "xxx" };
  const test: ngb.Site = { local: "th5.duileme.cn", remote: "tapi.duileme.cn", appID: "yyy" };
  const pro: ngb.Site = { local: "h5.duileme.cn", remote: "api.duileme.cn", appID: "zzz" };

  serverConfigProvider.sites[ngb.Env.DEV] = dev;
  serverConfigProvider.sites[ngb.Env.TEST] = test;
  serverConfigProvider.sites[ngb.Env.PRO] = pro;
  serverConfigProvider.env = Common.getEnv();
  serverConfigProvider.debug = false;
  serverConfigProvider.publicPath = Common.getPublicPath();
  serverConfigProvider.wXJsSign = "/credit/app/wechat/jsapi"; //js权限验证对象获取路径
  serverConfigProvider.wXOAuth = "/credit/app/wechat/auth_base"; //网页授权认证
};
siteConfig.$inject = ["serverConfigProvider"];

export default siteConfig;