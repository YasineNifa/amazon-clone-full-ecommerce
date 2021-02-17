// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyAeIWD_ZZ3L4-mnYvJTFKzftjwcQvNvV8Q",
    authDomain: "clone-559fa.firebaseapp.com",
    projectId: "clone-559fa",
    storageBucket: "clone-559fa.appspot.com",
    messagingSenderId: "419086735851",
    appId: "1:419086735851:web:5aee96b42f73f2856e61ae",
    measurementId: "G-2BC4G24PTQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db,auth};