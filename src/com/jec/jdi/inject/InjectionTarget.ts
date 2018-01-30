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

import {DecoratedType} from "./DecoratedType";

/**
 * Provides information about dependency injection over a specific object.
 */
export interface InjectionTarget {
  
  /**
   * The object on which dependency injection is processed.
   */
  target:any;

  /**
   * The reference to the object member on which dependency injection is
   * declared.
   */
  key:string|Symbol;

  /**
   * The index of the key parameter when <code>decoratedType</code> is
   * <code>DecoratedType.PARAMETER</code>.
   */
  parameterIndex:number;

  /**
   * The type of decorator that is used to perform dependency injection.
   */
  decoratedType:DecoratedType;
};