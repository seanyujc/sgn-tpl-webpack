import * as angular from 'angular';
import "./contact.scss"
import contactController from './contact.controller';

const contactModule = angular.module("contact.module", []);
contactModule.controller("contactController", contactController)

export default contactModule;