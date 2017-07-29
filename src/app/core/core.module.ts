import * as angular from "angular";
import animate from "./animate";
import constants from "./constants";
import filter from "./filter";
import resolver from "./providers/resolver.provider";

// XBP-NM-CIM-NO-DELETE
import { CommonService } from "./services/common.service";

const shared = angular.module("core.shared", []);

resolver(shared);
filter(shared);
constants(shared);
animate(shared);
// XBP-NM-CORE-NO-DELETE
shared.service("common", CommonService);

export default shared;
