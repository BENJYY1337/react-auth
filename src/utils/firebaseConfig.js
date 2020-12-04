import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA4wDktmix3h-uplpwog89tf1ynzxpAL_k",
  authDomain: "react-video-auth.firebaseapp.com",
  databaseURL: "https://react-video-auth.firebaseio.com",
  projectId: "react-video-auth",
  storageBucket: "react-video-auth.appspot.com",
  messagingSenderId: "708497657186",
  appId: "1:708497657186:web:a70c884bf76f86021e703b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
