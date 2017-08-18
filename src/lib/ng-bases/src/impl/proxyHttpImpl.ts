import * as angular from "angular";
import { ICommon } from "../common";
import { IAddMemberFn } from "../module";
import { IProxyHttp, ISgResult } from "../proxyHttp";

class ProxyHttpImpl implements IProxyHttp {

  static $inject = ["$q", "$http", "sgCommon"];

  constructor(private $q: ng.IQService, private $http: ng.IHttpService, private sgCommon: ICommon) {
  }

  get<T>(api: string, params: any): ng.IPromise<T | any> {
    const PATH = this.sgCommon.dealPath(api, "get");
    return this.$http.get<ISgResult<T>>(PATH, {
      params,
      cache: false,
    }).then(this.tf);
  }

  post<T>(api: string, params: any): ng.IPromise<T | any> {
    const PATH = this.sgCommon.dealPath(api, "post");
    return this.$http.post<ISgResult<T>>(PATH, params, {
      cache: false,
    }).then(this.tf);
  }

  form<T>(api: string, form: FormData): ng.IPromise<T | any> {
    const PATH = this.sgCommon.dealPath(api, "post");
    return this.$http.post(PATH, form, {
      cache: false,
      headers: { "Content-Type": undefined },
      transformRequest: angular.identity,
    }).then(this.tf);
  }
  private tf<T>(res: ng.IHttpPromiseCallbackArg<ISgResult<T>>): ng.IPromise<T | any> {
    return this.$q<T>((resolve, reject) => {
      if (res.data.code === 0 || res.data.code.toString() === "0") {
        resolve(res.data.data);
      } else {
        reject(res.data);
      }
      if (this.sgCommon.debug) {
        window.alert(res.config.url + "\n params: \n" + JSON.stringify(res.config.params));
      }
    });
  }
}

export const proxyHttp: IAddMemberFn = (module: ng.IModule) => {
  return module.service("proxyHttp", ProxyHttpImpl);
};
