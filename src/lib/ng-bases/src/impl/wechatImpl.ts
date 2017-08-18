import { ICommon, IWechat, IWechatShareParam } from "../common";
import { IAddMemberFn } from "../module";
import { IProxyHttp } from "../proxyHttp";

class WechatFactory implements IWechat {
    static $inject = ["$q", "proxyHttp", "sgCommon"];
    constructor(private $q: ng.IQService, private proxyHttp: IProxyHttp, private common: ICommon) {
        if (this.isWechat()) {
            this.wCJSSignature();
        }
    }
    shareJoint(param: IWechatShareParam) {
        wx.onMenuShareAppMessage(param);
        wx.onMenuShareQQ(param);
        wx.onMenuShareQZone(param);
        wx.onMenuShareTimeline(param);
        wx.onMenuShareWeibo(param);
    }

    isWechat(): boolean {
        const ua = navigator.userAgent.toLowerCase();
        return ua.search(/MicroMessenger/i) !== -1;
    }
    wCJSSignature<T>(): ng.IPromise<T> {
        const signUrl = this.common.getJsSignUrl();
        return this.proxyHttp.get<wx.ConfigPara>(signUrl, {
            appId: this.common.curSite.appID,
            url: window.location.href.split("#")[0],
        }).then((res: ng.IHttpPromiseCallbackArg<wx.ConfigPara>) => {
            return this.$q<T>((resolve, reject) => {
                res.data.debug = this.common.debug;
                res.data.jsApiList = this.common.jsApiList;
                wx.config(res.data);
            });
        });
    }
}

export const wechat: IAddMemberFn = (module: ng.IModule) => {
    return module.service("wechat", WechatFactory);
};
