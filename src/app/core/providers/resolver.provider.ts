
export interface IResolverServiceProvider extends ng.IServiceProvider {
    homePagePreloading: Function,
    contactPagePreloading: Function
}

export declare type Module = { name: string }

export interface ILazyLoad extends oc.ILazyLoad {
    load(module: Module | string | oc.ITypedModuleConfig | oc.IModuleConfig | (string | oc.ITypedModuleConfig | oc.IModuleConfig)[], config?: oc.IOptionsConfig): ng.IPromise<any>;
}

export default function (app: ng.IModule) {
    const resolverProvider: ng.IServiceProviderFactory = function () {

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

        const contactPagePreloading = function ($q: ng.IQService, $ocLazyLoad: ILazyLoad) {
            var deferred = $q.defer();
            require.ensure([], function (require) {
                var contactModule = require<{ default }>("../../pages/contact/contact.module").default;
                $ocLazyLoad.load({ name: contactModule.name })
                deferred.resolve(contactModule.controller);
            })
            return deferred.promise;
        }
        contactPagePreloading.$inject = ['$q', '$ocLazyLoad']


        const _this: IResolverServiceProvider = {
            homePagePreloading,
            contactPagePreloading,
            $get: function () {
                return _this
            }
        }
        return _this;
    }

    app.provider('resolver', resolverProvider);

}