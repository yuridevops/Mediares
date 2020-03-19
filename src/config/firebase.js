import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDQ3C83GiyWCIFwsPlcEUopKguMDj60_oM",
  authDomain: "mediares-site.firebaseapp.com",
  databaseURL: "https://mediares-site.firebaseio.com",
  projectId: "mediares-site",
  storageBucket: "mediares-site.appspot.com",
  messagingSenderId: "485831653152",
  appId: "1:485831653152:web:30128de50b825580528945"
};

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);