// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {

  production: false,
  // Initialize Firebase
  firebaseConfig :  {
    apiKey: "AIzaSyA_PdrWE6CaIq-j0HbaiZrvnOQEUuveTI8",
    authDomain: "something-1becd.firebaseapp.com",
    databaseURL: "https://something-1becd.firebaseio.com",
    projectId: "something-1becd",
    storageBucket: "",
    messagingSenderId: "471261646647"
  }
}
