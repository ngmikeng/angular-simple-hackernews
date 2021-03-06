# AngularSimpleHackernews
- This project for purpose practice Angular 6 and Rxjs.
- Integrated with [HackerNews API](https://github.com/HackerNews/API).
- This project is using the method `mergeMap()` operator of Rxjs to handle get data for list posts. 
- Refer the implementation of other methods `concatMap()` and `forkJoin()` in this repository: https://github.com/ngmikeng/angular-playground/tree/master/angular-practical-rxjs.
- Built with Bootstrap 4, ng-bootstrap.
- Generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.3.

## Demo
https://gqaioyqj.github.stackblitz.io

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

- Example add a module `core` and that will be import in `app` module.
`ng generate module core --module=app`

- Example add a service `Posts` in directory `app/posts`.
`ng generate service app/posts/posts`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
