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
import {InjectionPoint} from "./InjectionPoint";

/**
 * Represents a bean in the JDI specification.
 */
export interface Bean {
  
  /**
   * Obtains the scope of the bean.
   * 
   * @return {Scope} the scope of the bean.
   */
  getScope():Scope;

  /**
   * Obtains the name of the bean, if it has one.
   * 
   * @return {string} the name of the bean, or <code>null</code>.
   */
  getName():string;
  
  /**
   * Obtains the bean class of this bean.
   * 
   * @return {any} the bean class of this bean.
   */
  getBeanClass():any;
  
  /**
   * Obtains the bean types of the bean.
   * 
   * @return {Set<any>} the bean types of the bean.
   */
  getTypes():Set<any>;
  
  /**
   * Returns the full name of the bean class.
   */
  getQualifiedClassName():string;
  
  /**
   * Returns an array that contains all <code>InjectionPoint</code> objects for
   * this bean.
   * 
   * @return {Array<InjectionPoint>} all <code>InjectionPoint</code> objects for
   *                                 this bean.
   */
  getInjectionPoints():Array<InjectionPoint>;
};