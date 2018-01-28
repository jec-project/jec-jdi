
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

import {JdiError} from "./JdiError";

/**
 * The <code>UnsatisfiedDependencyError</code> represents an exception thrown by
 * a JDI container when an injection cannot be satisfied.
 */
export class UnsatisfiedDependencyError extends JdiError {

  ////////////////////////////////////////////////////////////////////////////
  // Constructor function
  ////////////////////////////////////////////////////////////////////////////

  /**
   * Creates a new <code>UnsatisfiedDependencyError</code> instance.
   * 
   * @param {string} message the message that defines the unsatisfied injection.
   */
  constructor(message:string) {
    super(`UnsatisfiedDependencyError: ${message}` );
    this.message = message;
  }
}