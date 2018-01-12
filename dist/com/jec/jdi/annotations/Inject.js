"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JdiConnectorRefs_1 = require("../jcad/JdiConnectorRefs");
const JdiError_1 = require("../exceptions/JdiError");
const jec_commons_1 = require("jec-commons");
const DCM = jec_commons_1.DecoratorConnectorManager.getInstance();
const CTXM = jec_commons_1.JcadContextManager.getInstance();
function Inject(params) {
    return function (...args) {
        var ctx = null;
        let result = null;
        let lastArg = null;
        let argLen = args.length;
        if (argLen === 3) {
            lastArg = args[2];
            if (lastArg === undefined) {
                ctx = CTXM.getContext(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_PROPERTY_CONNECTOR_REF);
                result = DCM.getDecorator(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_PROPERTY_CONNECTOR_REF, ctx).decorate(args[0], args[1], params);
            }
            else if (typeof lastArg === jec_commons_1.PrimitiveType.NUMBER) {
                ctx = CTXM.getContext(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF);
                result = DCM.getDecorator(JdiConnectorRefs_1.JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF, ctx).decorate(args[0], args[1], lastArg, params);
            }
        }
        else {
            throw new JdiError_1.JdiError("Invalid injection point: @Inject decorator must be used with class properties or constructor parameters");
        }
        return result;
    };
}
exports.Inject = Inject;
