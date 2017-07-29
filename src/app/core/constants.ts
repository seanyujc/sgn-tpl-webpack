export interface IConstMSG {
  ONLY_IN_WECHAT: string;
}

export default (app: ng.IModule) => {
  app.constant<IConstMSG>("MSG", {
    ONLY_IN_WECHAT: "亲！该功能仅能在微信中使用。",
  });
};
