// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import * as moment from "moment";

export const environment = {
  production: false,

  currentTimeLong: moment().format('HH:mm:ss DD.MM.YYYY'),

  firebaseConfig: {
    apiKey: 'AIzaSyBmuODKz4zngywdwjle2yZYT7fmNIVMxHw',
    authDomain: 'ng-chat-app-c55d7.firebaseapp.com',
    databaseURL: 'https://ng-chat-app-c55d7.firebaseio.com',
    projectId: 'ng-chat-app-c55d7',
    storageBucket: 'ng-chat-app-c55d7.appspot.com',
    messagingSenderId: '349736771990',
    appId: '1:349736771990:web:0ead0968eef47fa8ba3db7'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
