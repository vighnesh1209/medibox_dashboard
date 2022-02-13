import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkuk_Xqs-YLtdXvvdrfTdb_6oHOfcBUYM",
  authDomain: "patient-fa6b4.firebaseapp.com",
  projectId: "patient-fa6b4",
  storageBucket: "patient-fa6b4.appspot.com",
  messagingSenderId: "841970295158",
  appId: "1:841970295158:web:ba4215163b19529e0fda57",
  measurementId: "G-M44EB1359E"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const auth = getAuth(firebase);


console.log(auth);

let signOutButton = document.getElementById('signout');
signOutButton.addEventListener('click', (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  console.log('clicked');

  signOut(auth)
    .then(() => {
      window.location='doctor_login.html'
    })
    .catch((error) => {
      console.log(error);
    });

});

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const email = user.email;

//     const users = document.getElementById('user');
//     const text = document.createTextNode(email);

//     users.appendChild(text);

//     console.log(users);
//     //is signed in
//   } else {
//     //no user signed in
//   }
// });
