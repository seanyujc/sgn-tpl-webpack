import { IResolverServiceProvider } from './core/providers/resolver.provider';

import { module } from 'angular';
function routes($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider, resolverProvider: IResolverServiceProvider) {
    //XBP-NM-ROUTE-NO-DELETE

    $urlRouterProvider.otherwise('/home');
}
routes.$inject = ["$urlRouterProvider", "$stateProvider", "resolverProvider"]
export default module("routeBeen", []).config(routes);
