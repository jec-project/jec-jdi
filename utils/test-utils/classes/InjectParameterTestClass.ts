import {Inject} from "../../../src/com/jec/jdi/annotations/Inject";
import * as params from "../utilities/ParamUtils";

export class InjectParameterTestClass {

  constructor(@Inject(params.INJECT_PARAMS) bean:any) { };
}
