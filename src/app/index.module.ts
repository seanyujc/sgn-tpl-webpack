import "../assets/styles/common.scss";

import {module} from 'angular';

import siteConfig from './config/site.conf'
import routes from './index.routes'
import core from './core/core.module'
import run from './index.run'

import ngb = require('ng-bases');

export let app = module('app', [
    require('angular-ui-router'),
    require('angular-ui-bootstrap'),
    require("oclazyload"),
    ngb.ngSgCommon.name,
    core.name,
    routes.name
]);
app.config(siteConfig).run(run)
