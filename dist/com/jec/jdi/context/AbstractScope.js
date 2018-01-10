"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractScope {
    constructor(type) {
        this._type = type;
    }
    getType() {
        return this._type;
    }
}
exports.AbstractScope = AbstractScope;
;
