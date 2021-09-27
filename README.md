# CarRegistry - Note from the developer

This project was developed with the intention of showing my skills with Angular, Typescript, SASS and the other present technologies. Worth mention that since this app serves as showcase of my skills some approaches are done manually instead of using third-party packages so I can better show what I can do without shortcuts.
It consists in a app thar allows the user to register a car using Angular Reactive Forms, store it in the application using NGRX and keep the data in the Local Storage of the browser so when the user closes the app and open again the information will remain until the local storage is cleared. When a new record is added the app gives the user the possibility of seeing this fresh record filtered in a grid list. In this list it's possible to see all the records and also filter then by any substring present in any property of the data. It's also possible to toggle between the 'Basic' and the 'Extended' view of the grid table, as well as the amount of lines shown by the paginator.
The evaluator will also find unit tests for the main components.

# CarRegistry

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
