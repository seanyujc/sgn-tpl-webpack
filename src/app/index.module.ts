import "../assets/styles/common.scss";

import {module} from 'angular';
import routes from './index.routes';
import core from './core/core.module';

export let app = module('app', [
    require('angular-ui-router'),
    require('angular-ui-bootstrap'),
    require("oclazyload"),
    require("ng-bases"),
    core.name,
    routes.name
]);
