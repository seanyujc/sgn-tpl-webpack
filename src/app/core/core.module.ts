import * as angular from 'angular';
import resolver from './providers/resolver.provider';

const shared = angular.module("core.shared",[]);

resolver(shared)

export default shared;
