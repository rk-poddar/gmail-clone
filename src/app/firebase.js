import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
    apiKey: "AIzaSyCwnFtxqwIXf6VtKS86Ekwm6dh2WLMIAdg",
    authDomain: "clone-8e0bd.firebaseapp.com",
    projectId: "clone-8e0bd",
    storageBucket: "clone-8e0bd.appspot.com",
    messagingSenderId: "100728021830",
    appId: "1:100728021830:web:12b075d17f4de4cef83b47"
}

// firebase connection
const firebaseapp = firebase.initializeApp(firebaseConfig)

// firebase database connection
const db = firebaseapp.firestore()

export default db