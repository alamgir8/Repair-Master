import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBGQwCkDvf3aDIvbKXTdIb3ejKEH28xweY",
  authDomain: "repair-master-official.firebaseapp.com",
  projectId: "repair-master-official",
  storageBucket: "repair-master-official.appspot.com",
  messagingSenderId: "821998086832",
  appId: "1:821998086832:web:6983ae67837dd045646975"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export {auth, firebaseApp}