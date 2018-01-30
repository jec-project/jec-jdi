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

import {InjectionTarget} from "./InjectionTarget";

/**
 * The <code>Injector</code> interface defines the basic API you must implement
 * to create dependency injector object in a JDI container.
 */
export interface Injector {
  
  /**
   * A visitor function that performs dependency injection upon the given object
   * defined by the specified context.
   * 
   * @param {InjectionTarget} context the target context that specifies where to
   *                                  perform dependency injection.
   */
  inject(context:InjectionTarget):void;

  /**
   * A visitor function that destroys the instance injected through the
   * specified target context.
   * 
   * @param {InjectionTarget} context the target context that specifies what
   *                                  instance to destroy.
   */
  dispose(context:InjectionTarget):void;
};