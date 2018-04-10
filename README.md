# JDI Project

JavaScript Dependency Injection (JDI) framework is a [JavaScript Entreprise Container][jec-url] project that provides the ability to inject components into a JEC application in a typesafe way.

[![][jec-logo]][jec-url]

## Requirements

JEC JDI needs the following system parameters in order to work correctly:

- npm 3+
- TypeScript 2+

## Installation

Set up the JEC JDI module with:

```bash
$ npm install jec-jdi --save
```

## Using Components

### Standard Dependency Injection

All JEC JDI components have to be imported with the ES6 syntax:

```javascript
import { Inject } from "jec-jdi";
import { GreetingService } from "./sevices/GreetingService";

export class HelloWorld {

    @Inject({
        type: GreetingService,
        qualifier: "en_EN"
    })
    private _service:GreetingService;

    public sayHelloWorld():string {
        return this._service.sayHello();
    }
}
```

Because of TypeScript restrictions, you must use the `Interface` construct to directly use interfaces as type reference for an injection point:

```javascript
import {Interface} from "jec-commons";

export interface GreetingService {
    sayHelloWorld():string;
}

export const GreetingService = Interface("services.GreetingService");
```

### DI Shortens

JDI provides the ability to use shorten declarations, instead of initializers, to perform dependency injection. You can use either the type, or the name reference of the bean, to specify dependency injection:

```javascript
import { Inject } from "jec-jdi";
import { MyService } from "./sevices/MyService";
import { MyOtherService } from "./sevices/MyOtherService";

export class HelloWorld {

    @Inject(MyService)
    private _service:MyService;

    @Inject("MyBeanName")
    private _otherService:MyOtherService;
}
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC JDI node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [0.1.0](CHANGELOG.md#jec-jdi-0.1.0)
 
For a complete listing of release notes for all JEC JDI update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC JDI Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://github.com/pechemann/JEC
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png