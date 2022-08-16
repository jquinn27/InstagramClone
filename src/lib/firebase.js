import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
  apiKey: "AIzaSyBzTGeVAZaROZmn4ZRbFB527wyKDZxv3gg",
  authDomain: "instagram-97695.firebaseapp.com",
  projectId: "instagram-97695",
  storageBucket: "instagram-97695.appspot.com",
  messagingSenderId: "919571397294",
  appId: "1:919571397294:web:b004f087d97acf6bd04b3f",
};

const firebase = Firebase.initializeApp(config);

const storage = firebase.storage();

const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue, storage };
