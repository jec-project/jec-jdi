import {Inject} from "../../../src/com/jec/jdi/annotations/Inject";
import * as params from "../utilities/ParamUtils";

export class InjectFieldTestClass {

  @Inject(params.INJECT_PARAMS)
  public bean:any;
}
