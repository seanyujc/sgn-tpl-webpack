import ngb = require("../../lib/ng-bases");
import { Common } from "../core/common";

const siteConfig = (serverConfigProvider: ngb.IServerConfigProvider) => {

  serverConfigProvider.sites = Common.getSiteInfo();
  if (!serverConfigProvider.sites) {
    serverConfigProvider.sites = {};
    // 172.16.106.118  172.16.103.214 172.16.202.76 172.16.106.110
    const dev: ngb.ISite = { local: "dh5.duileme.cn", remote: "dapi.duileme.cn" };
    const test: ngb.ISite = { local: "th5.duileme.cn", remote: "tapi.duileme.cn" };
    const uat: ngb.ISite = { local: "uh5.duileme.cn", remote: "uapi.duileme.cn" };
    const pro: ngb.ISite = { local: "h5.duileme.cn", remote: "api.duileme.cn" };
    serverConfigProvider.sites[ngb.Env.DEV] = dev;
    serverConfigProvider.sites[ngb.Env.TEST] = test;
    serverConfigProvider.sites[ngb.Env.UAT] = uat;
    serverConfigProvider.sites[ngb.Env.PRO] = pro;
  }
  if (!!(window as any).CONFIG_SITE) {
    serverConfigProvider.sites[ngb.Env.UAT].local = (window as any).CONFIG_SITE;
    serverConfigProvider.sites[ngb.Env.PRO].local = (window as any).CONFIG_SITE;
  }
  if (!!(window as any).CONFIG_REMOTE) {
    serverConfigProvider.sites[ngb.Env.UAT].remote = (window as any).CONFIG_REMOTE;
    serverConfigProvider.sites[ngb.Env.PRO].remote = (window as any).CONFIG_REMOTE;
  }
  serverConfigProvider.env = Common.getEnv();
  serverConfigProvider.debug = false;
  serverConfigProvider.publicPath = Common.getPublicPath();
  serverConfigProvider.wXJsSign = "/credit/app/wechat/jsapi"; // js权限验证对象获取路径
  serverConfigProvider.wXOAuth = "/credit/app/wechat/auth_base"; // 网页授权认证
};
siteConfig.$inject = ["serverConfigProvider"];

export default siteConfig;
