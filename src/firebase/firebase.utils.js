import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBLg4G1BPxQS8QgqthgqH-QYpcQFqDWER8",
    authDomain: "guitar-sound-react.firebaseapp.com",
    databaseURL: "https://guitar-sound-react.firebaseio.com",
    projectId: "guitar-sound-react",
    storageBucket: "guitar-sound-react.appspot.com",
    messagingSenderId: "711595471032",
    appId: "1:711595471032:web:e687d6c8a9ed342d37844d",
    measurementId: "G-7BVSRLC83Y"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;