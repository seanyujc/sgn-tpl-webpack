
export interface IResolverServiceProvider extends ng.IServiceProvider {
    // XBP-NM-PLI-NO-DELETE
    // 'home' CONFIG 0 START
    homePagePreloading: Function,
    // 'home' CONFIG 0 END
}

export declare type Module = { name: string }

export interface ILazyLoad extends oc.ILazyLoad {
    load(module: Module | string | oc.ITypedModuleConfig | oc.IModuleConfig | (string | oc.ITypedModuleConfig | oc.IModuleConfig)[], config?: oc.IOptionsConfig): ng.IPromise<any>;
}

export default function (app: ng.IModule) {
    const resolverProvider: ng.IServiceProviderFactory = function () {
        // XBP-NM-PLF-NO-DELETE
        // 'home' CONFIG 1 START
        const homePagePreloading = function ($q: ng.IQService, $ocLazyLoad: ILazyLoad) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                var homeModule = require<{ default }>("../../pages/home/home.module").default;
                $ocLazyLoad.load({ name: homeModule.name })
                deferred.resolve(homeModule.controller);
            })
            return deferred.promise;
        }
        homePagePreloading.$inject = ['$q', '$ocLazyLoad']
        // 'home' CONFIG 1 END
        
        const _this: IResolverServiceProvider = {
            // XBP-NM-PLL-NO-DELETE
            // 'home' CONFIG 2 START
            homePagePreloading,
            // 'home' CONFIG 2 END

            $get: function () {
                return _this
            }
        }
        return _this;
    }

    app.provider('resolver', resolverProvider);

}