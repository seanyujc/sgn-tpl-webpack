// tslint:disable-next-line:no-reference
/// <reference path="../dts/wx/index.d.ts" />
import { ISite } from "./provider";
export interface ICommon {
    curSite: ISite;
    debug: boolean;
    jsApiList: string[];
    dealPath(apiKey: string, method: string): string;
    q(url?: string): any;
    getJsSignUrl(): string;
    getEntrance(): string;
    getLocalSite(): string;
}
export interface IWechatShareParam extends wx.MenuShareAppMessagePara, wx.MenuShareQQPara,
    wx.MenuShareQZonePara, wx.MenuShareTimelinePara, wx.MenuShareWeiboPara {
}
export interface IWechat {
    wCJSSignature<T>(): angular.IPromise<any>;
    isWechat(): boolean;
    shareJoint(param: IWechatShareParam);
}
