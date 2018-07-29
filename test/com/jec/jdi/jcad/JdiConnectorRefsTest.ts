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
import {JdiConnectorRefs} from "../../../../../src/com/jec/jdi/jcad/JdiConnectorRefs";

// Test:
describe("JdiConnectorRefs", ()=> {

  describe("#INJECT_PARAMETER_CONNECTOR_REF", ()=> {
    it("INJECT_PARAMETER_CONNECTOR_REF should return 'com.jec.commons.jdi.annotations.Inject#parameter", function() {
      expect(
        JdiConnectorRefs.INJECT_PARAMETER_CONNECTOR_REF
      ).to.equal("com.jec.commons.jdi.annotations.Inject#parameter");
    });
  });
  
  describe("#INJECT_FIELD_CONNECTOR_REF", ()=> {
    it("INJECT_FIELD_CONNECTOR_REF should return 'com.jec.commons.jdi.annotations.Inject#field", function() {
      expect(
        JdiConnectorRefs.INJECT_FIELD_CONNECTOR_REF
      ).to.equal("com.jec.commons.jdi.annotations.Inject#field");
    });
  });
  
  describe("#INJECTABLE_CONNECTOR_REF", ()=> {
    it("INJECTABLE_CONNECTOR_REF should return 'com.jec.commons.jdi.annotations.Injectable", function() {
      expect(
        JdiConnectorRefs.INJECTABLE_CONNECTOR_REF
      ).to.equal("com.jec.commons.jdi.annotations.Injectable");
    });
  });
});
