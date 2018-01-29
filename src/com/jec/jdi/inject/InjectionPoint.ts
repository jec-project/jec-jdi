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

import {Bean} from "./Bean";
import {Member, Parameter} from "jec-commons";

/**
 * Provides access to metadata about an injection point in the JDI
 * specification.
 */
export interface InjectionPoint {
  
  /**
   * Get the <code>Bean</code> object representing the bean that defines the
   * injection point.
   * 
   * @return {Bean} the bean that defines the injection point.
   */
  getBean():Bean;

  /**
   * Get the required type of injection point.
   * 
   * @return {any} the required type of injection point.
   */
  getType():any;

  /**
   * Get the <code>Member</code>, or <code>Parameter</code> object that defines 
   * the element where this injection point is declared.
   * 
   * @return {Member|Parameter} the <code>Member</code>, or
   *                            <code>Parameter</code> object that defines the 
   *                            element where this injection point is declared.
   */
  getElement():Member|Parameter;

  /**
   * Returns the full name of the class that defines the injection point.
   * 
   * @return {string} the full name of the class that defines this injection
   *                  point.
   */
  getQualifiedClassName():string;
  
  /**
   * Returns the name reference to a bean that have to be associated with the
   * injection point.
   * 
   * @return {string} the name reference to a bean associated with this 
   *                  injection point.
   */
  getRef():string;
  
  /**
   * Obtains the qualifiers defined for this injection point.
   * 
   * @return {Array<string>} the qualifiers defined for this injection point.
   */
  getQualifiers():Array<string>;
};