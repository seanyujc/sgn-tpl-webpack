import * as ngb from "../../lib/ng-bases";

declare var NODE_ENV: string;
declare var PUBLIC_PATH: string;
declare var SITE_INFO: string;

export class Common {
  static getEnv(): ngb.Env {
    let env = ngb.Env.DEV;
    if (NODE_ENV === "TEST") {
      env = ngb.Env.TEST;
    } else if (NODE_ENV === "PRO") {
      env = ngb.Env.PRO;
    }
    return env;
  }
  static getSiteInfo(): ngb.ISites {
    const siteInfo: any = SITE_INFO;
    if (!siteInfo) {
      return;
    }
    const o = {};
    o[ngb.Env.DEV] = siteInfo.DEV;
    o[ngb.Env.TEST] = siteInfo.TEST;
    o[ngb.Env.UAT] = siteInfo.UAT;
    o[ngb.Env.PRO] = siteInfo.PRO;
    return o;
  }
  static getPublicPath() {
    return PUBLIC_PATH;
  }

}
