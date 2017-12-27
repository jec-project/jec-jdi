
import {AbstractDecoratorConnector, Decorator} from "jec-commons";

export class InjectConnector extends AbstractDecoratorConnector {
  
  constructor(jcadReference:string, decorator:Decorator) {
    super(jcadReference, decorator)
  }
}