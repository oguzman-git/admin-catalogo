# MyApp
### Administrador de catálogo de tienda de ropa desarrollado en el framework de Angular 9 que usa la CDN de Bootstrap y la librería de font awesome para los estilos. Integra servicios de conexión con la base de datos libre de Google Firebase para lograr permanencia de los datos en la aplicación. 


### Se usaron 4 componentes principales para el desarrollo del proyecto: marca, lista-marcas, producto y lista-productos, los cuales corresponden a las 4 secciones que se visualizan en la aplicación (cada uno con su html respectivo) y que se integran en el modulo app.component.html. Se crearon 2 clases principales en la carpeta modelos para definir los atributos de la marca y el producto. 


### En la carpeta services se definen todos los métodos para interactuar con la base de datos: obtener, insertar, actualizar y borrar, y los archivos marca.component.ts y producto.component.ts se definen los métodos del formulario (subscribe de los arreglos, onSubmit y reiniciar formulario), mientras que en lista-productos.component.ts y lista-marcas.component.ts se encuentran métodos para tener scope de los arreglos, rellenar información del formulario y eliminar un producto o marca respectivamente de la lista creada. 


### Todas las validaciones  de los datos se realizaron desde los archivos html de los formularios (producto.component.html y marca.component.html) usando las clases de validación .valid y .dirty principalmente. 



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
# admin-catalogo
