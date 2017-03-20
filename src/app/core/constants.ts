export interface ConstMSG {
    ONLY_IN_WECHAT: string;
}

export default function (app: ng.IModule) {
    app.constant<ConstMSG>('MSG', {
        ONLY_IN_WECHAT: "亲！该功能仅能在微信中使用。"
    })
}