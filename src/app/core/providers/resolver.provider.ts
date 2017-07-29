
export interface IResolverServiceProvider extends ng.IServiceProvider {
  // XBP-NM-PLI-NO-DELETE
  // 'home' CONFIG 0 START
  homePagePreloading: Function;
  // 'home' CONFIG 0 END
}

export declare type Module = { name: string };

export interface ILazyLoad extends oc.ILazyLoad {
  load(module: Module | string | oc.ITypedModuleConfig | oc.IModuleConfig | Array<string | oc.ITypedModuleConfig | oc.IModuleConfig>,
    config?: oc.IOptionsConfig): ng.IPromise<any>;
}

export default (app: ng.IModule) => {
  const resolverProvider: ng.IServiceProviderFactory = () => {
    // XBP-NM-PLF-NO-DELETE
    // 'home' CONFIG 1 START
    const homePagePreloading = function ($q: ng.IQService, $ocLazyLoad: ILazyLoad) {
      const deferred = $q.defer();
      require.ensure([], function (require) {
        const homeModule = require<{ default }>("../../pages/home/home.module").default;
        $ocLazyLoad.load({ name: homeModule.name });
        deferred.resolve(homeModule.controller);
      });
      return deferred.promise;
    };
    homePagePreloading.$inject = ["$q", "$ocLazyLoad"];
    // 'home' CONFIG 1 END

    const self: IResolverServiceProvider = {
      // XBP-NM-PLL-NO-DELETE
      // 'home' CONFIG 2 START
      homePagePreloading,
      // 'home' CONFIG 2 END

      $get: () => {
        return self;
      },
    };
    return self;
  };

  app.provider("resolver", resolverProvider);

};