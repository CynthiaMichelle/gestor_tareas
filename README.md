# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Gestor de Tareas

## Descripción
La aplicación es un sistema de gestión de tareas que permite a los usuarios añadir, modificar y eliminar tareas. Está construida con React y proporciona una interfaz de usuario interactiva y fácil de usar.

## Componentes Principales

- **Todo**: Representa una tarea individual. Permite a los usuarios editar o eliminar la tarea. Contiene dos subcomponentes:
  - `FormEdit` para editar la tarea.
  - `TodoElement` para mostrar los detalles de la tarea.
- **TodoApp**: Es el componente principal que maneja la lista de tareas (todos). Permite a los usuarios crear nuevas tareas y pasa funciones de actualización y eliminación a los componentes Todo.
- **App**: Sirve como el componente raíz de la aplicación y encapsula TodoApp.

## Hooks

- `useState`: Se usa para gestionar el estado de las tareas y los detalles de cada tarea. Controla la entrada de datos en los formularios y el estado de cada tarea en la lista.
- `preventDefault` en `handleSubmit`: Previene la recarga de la página en la presentación del formulario, asegurando una experiencia de usuario fluida.

## Funciones Principales

- `handleSubmit`: Agrega una nueva tarea a la lista.
- `handleUpdate`: Actualiza el título de una tarea existente.
- `handleDelete`: Elimina una tarea de la lista.

## Gestión de Datos

- **Estado Local (`useState`)**: Gestiona la lista de tareas y los detalles de cada tarea. Asegura que la interfaz de usuario se actualice en respuesta a los cambios en el estado.

## Navegación y Estructura

- La aplicación gestiona la navegación interna entre la creación, edición y eliminación de tareas mediante el uso de estados y la actualización de componentes.

## Interfaz de Usuario

- La interfaz proporciona una interacción inmediata con las tareas y retroalimentación visual de las acciones del usuario.

