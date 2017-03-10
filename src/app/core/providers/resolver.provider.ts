
export interface IResolverServiceProvider extends ng.IServiceProvider {
    //XBP-NM-PLI-NO-DELETE
}

export declare type Module = { name: string }

export interface ILazyLoad extends oc.ILazyLoad {
    load(module: Module | string | oc.ITypedModuleConfig | oc.IModuleConfig | (string | oc.ITypedModuleConfig | oc.IModuleConfig)[], config?: oc.IOptionsConfig): ng.IPromise<any>;
}

export default function (app: ng.IModule) {
    const resolverProvider: ng.IServiceProviderFactory = function () {
        //XBP-NM-PLF-NO-DELETE
        
        const _this: IResolverServiceProvider = {
            //XBP-NM-PLL-NO-DELETE

            $get: function () {
                return _this
            }
        }
        return _this;
    }

    app.provider('resolver', resolverProvider);

}