"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractScope_1 = require("./AbstractScope");
const ScopeType_1 = require("./ScopeType");
class SessionScoped extends AbstractScope_1.AbstractScope {
    constructor() {
        super(ScopeType_1.ScopeType.SESSION);
    }
}
exports.SessionScoped = SessionScoped;
;
