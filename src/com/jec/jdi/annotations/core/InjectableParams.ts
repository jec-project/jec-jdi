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

import {Interface} from "jec-commons";
import { ScopeType } from "../../context/ScopeType";

/**
 * The <code>InjectableParams</code> interface defines the API you must 
 * implement to create objects passed as parameter of the JEC
 * <code>@Injectable<code> decorator.
 */
export interface InjectableParams {

  /**
   * The main interface type implemented by the decorated bean.
   */
  type?:Interface;
  
  /**
   * The references to the environments where the bean can be instanciated.
   */
  retention?:Array<string>;

  /**
   * The qualifiers for the decorated bean.
   */
  qualifiers?:Array<string>;

  /**
   * Provides instantiation policy for the decorated bean.
   */
  scope?:ScopeType;

  /**
   * The name reference for the decorated bean.
   */
  name?:string;
}
