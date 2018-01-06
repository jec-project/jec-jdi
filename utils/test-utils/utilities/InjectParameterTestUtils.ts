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

import {ClassLoader, JcadContextFactory, JcadContext, DecoratorConnectorManager,
        JcadContextManager, Decorator, DefaultClassLoader} from "jec-commons";
import {JdiConnector} from "../classes/JdiConnector";
import {JdiConnectorRefs} from "../../../src/com/jec/jdi/jcad/JdiConnectorRefs";
import {InjectParams} from "../../../src/com/jec/jdi/annotations/core/InjectParams";

/*!
* This module constains utilities used by the InjectParameterTest test suite.
*/

// Utilities:
const LOADER:ClassLoader = new DefaultClassLoader();
const VALID_CLASS:string = process.cwd() + "/utils/test-utils/classes/InjectParameterTestClass";
export const params:any = require("./ParamUtils");
export const buildClassRef:Function = function():void {
  let ClassRef:any = LOADER.loadClass(VALID_CLASS);
  new ClassRef();
};
class InjectDecorator implements Decorator {
  decorate(target:any, propertyKey:string, parameterIndex:number,
           params:InjectParams):any { return target; }
}
export const PARAMETER_INDEX:number = 0;
export const INJECT_DECORATOR:Decorator = new InjectDecorator();
export const initContext:Function = function():JcadContext {
  let factory:JcadContextFactory = new JcadContextFactory();
  let connector = new JdiConnector(JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF, INJECT_DECORATOR);
  let context:JcadContext = factory.create();
  DecoratorConnectorManager.getInstance().addConnector(connector, context);
  JcadContextManager.getInstance().addContext(JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF, context);
  return context;
}
export const resetContext:Function = function(context:JcadContext):void {
  JcadContextManager.getInstance().removeContext(JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF);
  DecoratorConnectorManager.getInstance().removeConnector(JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF, context);
  context = null;
}
