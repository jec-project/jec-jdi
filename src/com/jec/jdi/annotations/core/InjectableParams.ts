//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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

/**
 * The <code>InjectableParams</code> interface defines the API you must 
 * implement to create objects passed as parameter of the JEC
 * <code>@Injectable<code> decorator.
 */
export interface InjectableParams {

  /**
   * The main interface type implemented by the decorated bean.
   */
  type?:Symbol;
  
  /**
   * A list of interface types implemented by the decorated bean.
   */
  types?:Array<Symbol>;

  /**
   * The references to the environments where the bean can be instanciated.
   */
  retention?:Array<string>;

  /**
   * The main qualifier for the decorated bean.
   */
  qualifier?:string;
}
