import * as ngb from "../../lib/ng-bases";

declare var NODE_ENV: string;
declare var PUBLIC_PATH: string;

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
  static getPublicPath() {
    return PUBLIC_PATH;
  }

}
