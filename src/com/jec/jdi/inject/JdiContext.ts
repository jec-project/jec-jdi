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

import {Scope} from "../context/Scope";

/**
 * Interface implemented by a JDI context.
 */
export interface JdiContext {

  /**
   * Returns the scope  for this context object.
   * 
   * @return {Scope} the scope  for this context.
   */
  getScope():Scope;

  /**
   * Returns a boolean values that indicates whether this context object is 
   * active (<code>true</code>), or not (<code>false</code>).
   * 
   * @return {boolean} <code>true</code> whether this context is active;
   *                   <code>false</code> otherwhise.
   */
  isActive():boolean;
  
  //getBean(id:string):any;

};