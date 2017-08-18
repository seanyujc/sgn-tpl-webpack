import { ICommon } from "../common";
import { Env } from "../enums";
import { IAddMemberFn } from "../module";
import { IApiConfigProvider, IHost, IServerConfigProvider, ISite } from "../provider";

class CommonFactory implements ICommon {

  static $inject = ["$q", "$http", "apiConfig", "serverConfig"];

  public debug: boolean;
  public jsApiList: string[];
  curSite: ISite;
  private env: Env;
  private protocol: string;
  private domain: string;
  private localSite: string;
  private entrance: string;
  private jsSignUrl: string;

  constructor(
    private $q: ng.IQService, private $http: ng.IHttpService, private apiConfig: IApiConfigProvider,
    private serverConfig: IServerConfigProvider) {

    const URL_TPL = "//{DOMAIN}{HOST_API}?appId=APPID&path=PATH&state=!STATE";

    this.env = serverConfig.env;
    this.debug = serverConfig.debug;
    this.protocol = serverConfig.protocol;
    this.curSite = serverConfig.sites[this.env];
    this.domain = this.curSite.remote;
    this.localSite = this.protocol + "//" + this.curSite.local + serverConfig.publicPath;
    this.entrance = this.protocol + URL_TPL.replace(/\{DOMAIN}/, this.curSite.remote).replace(/\{HOST_API}/, serverConfig.wXOAuth)
      .replace("APPID", this.curSite.appID);
    this.jsSignUrl = "//" + this.curSite.remote + serverConfig.wXJsSign;
    this.jsApiList = serverConfig.jsApiList;
  }

  trim(s: string): string {
    return s.replace(/^[\s\t ]+/g, "");
  }

  dealPath(apiKey = "", method = "get"): string {
    let api = "";
    let url = apiKey;
    method = method.toLocaleLowerCase();
    if (!this.apiConfig[method]) { return ""; }
    if (this.apiConfig[method][apiKey]) {
      api = this.apiConfig[method][apiKey];
      if (api.indexOf(":") !== -1) {
        url = "//{DOMAIN}{HOST}{API}";
        const part = api.split(":");
        part[0] = this.trim(part[0]);
        part[1] = this.trim(part[1]);
        const host: IHost = this.apiConfig.hosts[part[0]];
        const domain = host.domain ? host.domain : this.domain;
        url = url.replace(/\{DOMAIN}/, domain).replace(/\{HOST}/, host.dir).replace(/\{API}/, part[1]);
      } else {
        url = api;
      }
    }
    return url;
  }

  getLocalSite(): string {
    return this.localSite;
  }

  getEntrance(): string {
    return this.entrance;
  }

  getJsSignUrl(): string {
    return this.jsSignUrl;
  }

  q(search = window.location.search): any {
    const q = {};
    let qTemp;
    if (search.split("?")[1]) {
      qTemp = search.split("?")[1].split("&");
      for (let i = 0, l = qTemp.length; i < l; i++) {
        const t = qTemp[i].split("=");
        q[t[0]] = t[1];
      }
    }
    return q;
  }
}

export const common: IAddMemberFn = (module: ng.IModule) => {
  return module.service("sgCommon", CommonFactory);
};
