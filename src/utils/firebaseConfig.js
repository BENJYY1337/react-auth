import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDMpW6Mar7TPJSiMDdIrs05T0fRELgezVs",
  authDomain: "react-auth-ca01f.firebaseapp.com",
  databaseURL: "https://react-auth-ca01f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-auth-ca01f",
  storageBucket: "react-auth-ca01f.appspot.com",
  messagingSenderId: "1015499013261",
  appId: "1:1015499013261:web:e25a9817fa363a812cb6c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
