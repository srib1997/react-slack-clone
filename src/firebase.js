import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyCG4VV8ch_Ouyj2s6Yyq4hbkNyESiOUPl4",
  authDomain: "react-slack-clone-9ccf9.firebaseapp.com",
  databaseURL: "https://react-slack-clone-9ccf9.firebaseio.com",
  projectId: "react-slack-clone-9ccf9",
  storageBucket: "react-slack-clone-9ccf9.appspot.com",
  messagingSenderId: "121162066570"
};
firebase.initializeApp(config);

export default firebase;