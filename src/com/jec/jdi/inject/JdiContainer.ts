
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

import {BeanManager} from "./BeanManager";

/**
 * Interface implemented by a JDI container.
 */
export interface JdiContainer {

  /**
   * Returns the unique ID fror thid container.
   * 
   * @return {string} the unique ID fror thid container.
   */
  getId():string;

  /**
   * Returns the <code>BeanManager</code> object for the current context.
   * 
   * @return {BeanManager} the <code>BeanManager</code> object for the current
   *                       context.
   */
  getBeanManager():BeanManager;

  /**
   * Registers a <code>BeanManager</code> object.
   * 
   * @param {string} beanManager the <code>BeanManager</code> object to
   *                             register.
   */
  setBeanManager(beanManager:BeanManager):void;
};