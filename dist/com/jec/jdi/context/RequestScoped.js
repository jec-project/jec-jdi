"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractScope_1 = require("./AbstractScope");
const ScopeType_1 = require("./ScopeType");
class RequestScoped extends AbstractScope_1.AbstractScope {
    constructor() {
        super(ScopeType_1.ScopeType.REQUEST);
    }
}
exports.RequestScoped = RequestScoped;
;
