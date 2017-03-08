// import * as ngb from "ng-bases/dts";
import ngb = require("ng-bases");

declare var NODE_ENV: string;
declare var PUBLIC_PATH: string;
interface GlobalEnvironment {
  NODE_ENV;
  PUBLIC_PATH;
}

const siteConfig = function (serverConfigProvider: ngb.IServerConfigProvider) {

    const dev: ngb.Site = { local: "dh5.duileme.cn", remote: "dapi.duileme.cn", appID: "wx165579c7fca21c14" }
    const test: ngb.Site = {local: "th5.duileme.cn", remote: "tapi.duileme.cn", appID: "wxa4a3657d35a0f7b4"}
    const pro: ngb.Site = {local: "h5.duileme.cn", remote: "api.duileme.cn", appID: "wxf7efaadf0d8ff9fb"}

    let env = ngb.Env.DEV;
    if(NODE_ENV === 'TEST'){
        env = ngb.Env.TEST;
    }else if(NODE_ENV === 'PRO'){
        env = ngb.Env.PRO
    }

    serverConfigProvider.sites[ngb.Env.DEV] = dev
    serverConfigProvider.sites[ngb.Env.TEST] = test
    serverConfigProvider.sites[ngb.Env.PRO] = pro
    serverConfigProvider.env = env
    serverConfigProvider.debug = false
    serverConfigProvider.publicPath = PUBLIC_PATH
    serverConfigProvider.wXJsSign = '/credit/app/wechat/jsapi'; //js权限验证对象获取路径
    serverConfigProvider.wXOAuth = '/credit/app/wechat/auth_base'; //网页授权认证
}
siteConfig.$inject = ["serverConfigProvider"]

export default siteConfig;