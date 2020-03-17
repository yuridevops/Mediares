import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD0HHRKdCjS6PhJoW1G3H_XQgqG4Xe26GA",
    authDomain: "eventos-31453.firebaseapp.com",
    databaseURL: "https://eventos-31453.firebaseio.com",
    projectId: "eventos-31453",
    storageBucket: "eventos-31453.appspot.com",
    messagingSenderId: "269735721211",
    appId: "1:269735721211:web:df56c05b9f0a941bcfd85e"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);