//import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA-sMQkfLsUMJ5LGTXZo3Xy17UdRYnbTOo",
    authDomain: "project1-6308f.firebaseapp.com",
    projectId: "project1-6308f",
    storageBucket: "project1-6308f.appspot.com",
    messagingSenderId: "731843500691",
    appId: "1:731843500691:web:823bdb67ce86e335a48b66"
};

firebase.initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebase.database();