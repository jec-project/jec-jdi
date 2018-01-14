//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import {InjectParams} from "./core/InjectParams";
import {JdiConnectorRefs} from "../jcad/JdiConnectorRefs";
import {InvalidInjectionPointError} from "../exceptions/InvalidInjectionPointError";
import {JcadContext, JcadContextManager, DecoratorConnectorManager,
        PrimitiveType} from "jec-commons";

////////////////////////////////////////////////////////////////////////////////
// JCAD API
////////////////////////////////////////////////////////////////////////////////

const DCM:DecoratorConnectorManager = DecoratorConnectorManager.getInstance();
const CTXM:JcadContextManager = JcadContextManager.getInstance();

/**
 * The <code>@Inject</code> decorator defines an injection point in the JEC
 * specification.
 *
 * [[include:Inject.md]]
 *
 * @param {InjectParams} params the parameters for the associated class.
 */
export function Inject(params?:InjectParams):Function {
  
  return function(...args:any[]):Function {

    ////////////////////////////////////////////////////////////////////////////
    // JCAD API
    ////////////////////////////////////////////////////////////////////////////

    var ctx:JcadContext = null;
    let result:any = null;
    let lastArg:any = null;
    let argLen:number = args.length;
    
    if(argLen === 3) {
      lastArg = args[2];
      if(lastArg === undefined) {
        ctx = CTXM.getContext(JdiConnectorRefs.INJECT_PROPERTY_CONNECTOR_REF);
        result = DCM.getDecorator(
                    JdiConnectorRefs.INJECT_PROPERTY_CONNECTOR_REF,
                    ctx
                  ).decorate(args[0], args[1], params);
      } else if(typeof lastArg === PrimitiveType.NUMBER) {
        ctx = CTXM.getContext(JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF);
        result = DCM.getDecorator(
                  JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF,
                  ctx
                ).decorate(args[0], args[1], lastArg, params);
      } 
    } else {
      throw new InvalidInjectionPointError(args[0]);
    }   
    return result;
  }
}
