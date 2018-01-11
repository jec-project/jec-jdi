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

import "mocha";
import {expect} from "chai";

// Class to test:
import {ScopeType} from "../../../../../src/com/jec/jdi/context/ScopeType";

// Utilities:
import * as utils from "../../../../../utils/test-utils/utilities/ScopeTypeTestUtils";

// Test:
describe("ScopeType", ()=> {

  it("ScopeType.DEPENDENT should return 'dependent'", function() {
    expect(ScopeType.DEPENDENT).to.equal(utils.DEPENDENT);
  });
  
  it("ScopeType.APPLICATION should return 'application'", function() {
    expect(ScopeType.APPLICATION).to.equal(utils.APPLICATION);
  });
  
  it("ScopeType.SESSION should return 'session'", function() {
    expect(ScopeType.SESSION).to.equal(utils.SESSION);
  });
  
  it("ScopeType.REQUEST should return 'request'", function() {
    expect(ScopeType.REQUEST).to.equal(utils.REQUEST);
  });
});
