import { IResolverServiceProvider } from './core/providers/resolver.provider';

import { module } from 'angular';
function routes($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider, resolverProvider: IResolverServiceProvider) {
    // XBP-NM-ROUTE-NO-DELETE
    // 'home' CONFIG START
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/home/home.html'),
        controller: "homeController",
        resolve: {
            homePreloading: resolverProvider.homePagePreloading
        }
    });
    // 'home' CONFIG END

    $urlRouterProvider.otherwise('/home');
}
routes.$inject = ["$urlRouterProvider", "$stateProvider", "resolverProvider"]
export default module("routeBeen", []).config(routes);
