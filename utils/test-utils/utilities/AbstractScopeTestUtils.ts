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

import {AbstractScope} from "../../../src/com/jec/jdi/context/AbstractScope";
import {ScopeType} from "../../../src/com/jec/jdi/context/ScopeType";

/*!
 * This module constains utilities used by the AbstractScopeTest test suite.
 */

// Utilities:
export const TYPE:string = ScopeType.APPLICATION;
class AbstractScopeImpl extends AbstractScope {
  constructor(){
    super(TYPE);
  }
}
export const buildAbstractScope:Function = function():AbstractScope {
  let scope:AbstractScope = new AbstractScopeImpl();
  return scope;
};
