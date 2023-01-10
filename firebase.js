import * as firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyD-7oM8U6LMS9tIr5taV2xezl91o0qvC_4",
  authDomain: "tugas-signal-putri.firebaseapp.com",
  projectId: "tugas-signal-putri",
  storageBucket: "tugas-signal-putri.appspot.com",
  messagingSenderId: "544917863771",
  appId: "1:544917863771:web:d37ad09da48a185987ae7e"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export {auth}
