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

import {InjectParams} from "../../../src/com/jec/jdi/annotations/core/InjectParams";
import {InjectableParams} from "../../../src/com/jec/jdi/annotations/core/InjectableParams";

export const QUALIFIER:string = "test";
export const RETENTION:Array<string> = ["TEST"];

export const INJECT_PARAMS:InjectParams = {
  qualifier: QUALIFIER,
  retention: RETENTION
};

export const INJECTABLE_PARAMS:InjectableParams = {
  qualifier: QUALIFIER,
  retention: RETENTION
};