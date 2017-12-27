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
 * The <code>JdiConnectorRefs</code> Enum provides values that define the
 * references of the decorator connectors used by the JDI API.
 */
export enum JdiConnectorRefs {
  
  /**
   * Defines the reference for connectors that must be used when the
   * <code>@Inject</code> decorator defines a 'parameter' injection point.
   */
  INJECT_PARAMETER_CONNECTOR_REF =
                             "com.jec.commons.jdi.annotations.Inject#parameter",

  /**
   * Defines the reference for connectors that must be used when the
   * <code>@Inject</code> decorator defines a 'property' injection point.
   */
  INJECT_PROPERTY_CONNECTOR_REF =
                              "com.jec.commons.jdi.annotations.Inject#property",

  /**
   * Defines the reference for connectors that must be used to interact with the
   * <code>@Injectable</code> decorator.
   */
  INJECTABLE_CONNECTOR_REF = "com.jec.commons.jdi.annotations.Injectable",
}
