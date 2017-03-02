import { IResolverServiceProvider } from './core/providers/resolver.provider';

import { module } from 'angular';
function routes($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: angular.ui.IStateProvider, resolverProvider: IResolverServiceProvider) {
    $stateProvider.state('home', {
        url: "/home",
        templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/home/home.html'),
        controller: "homeController",
        resolve: {
            homePreloading: resolverProvider.homePagePreloading
        }
    });

    $stateProvider.state('contact', {
        url: "/contact",
        templateUrl: require('!!file-loader?name=templates/[name].[ext]!./pages/contact/contact.html'),
        controller: "contactController",
        resolve: {
            homePreloading: resolverProvider.contactPagePreloading
        }
    });

    $urlRouterProvider.otherwise('/home');
}
routes.$inject = ["$urlRouterProvider", "$stateProvider", "resolverProvider"]
export default module("routeBeen", []).config(routes);
