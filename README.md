# Personal website trina.si

This is the source code for my personal website.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Copy `.env.example` over to `env.local` and/or customize environment variables.
Run with `yarn start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Production setup

```bash
$ cp .env.example .env
$ docker-compose up -d
```

Will spin up a nginx container and copy the files into it. You should be able to access the frontend at the specified port.
