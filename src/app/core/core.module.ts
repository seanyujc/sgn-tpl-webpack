import * as angular from 'angular';
import resolver from './providers/resolver.provider';
import filter from './filter';
import constants from './constants';
import animate from './animate';

//XBP-NM-CIM-NO-DELETE
import { CommonService } from './services/common.service';


const shared = angular.module("core.shared", []);

resolver(shared)
filter(shared)
constants(shared)
animate(shared)
//XBP-NM-CORE-NO-DELETE
shared.service('common', CommonService);

export default shared;
