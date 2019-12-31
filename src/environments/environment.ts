import { firebase, firebaseui } from 'firebaseui-angular';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyBI50BiiNgDHNx0yxylkJmF-Xi9GSDDH2M",
    authDomain: "angular-firebase-ef007.firebaseapp.com",
    databaseURL: "https://angular-firebase-ef007.firebaseio.com",
    projectId: "angular-firebase-ef007",
    storageBucket: "angular-firebase-ef007.appspot.com",
    messagingSenderId: "1086676212701",
    appId: "1:1086676212701:web:0fc20445262b7587607434",
    measurementId: "G-3C5YF9K9XQ"
  },
  firebaseUiAuthConfig: {
    autoUpgradeAnonymousUsers: false,
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      /*
      {
        scopes: [
          'public_profile',
          'email',
          'user_likes',
          'user_friends'
        ],
        customParameters: {
          'auth_type': 'reauthenticate'
        },
        provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
      },
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      {
        requireDisplayName: false,
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      },
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      */
    ],
    tosUrl: '<your-tos-link>',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
    siteName: 'my-app',
  }
};
