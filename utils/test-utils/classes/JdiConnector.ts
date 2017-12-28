
import {AbstractDecoratorConnector, Decorator} from "jec-commons";

export class JdiConnector extends AbstractDecoratorConnector {
  
  constructor(jcadReference:string, decorator:Decorator) {
    super(jcadReference, decorator)
  }
}