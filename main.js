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
  apiKey: 'AIzaSyBOz0OAB-X_-WS56CKrGE678DfmkmAdv5U',
  authenticationDomain: 'medibox-bcf65.firebaseapp.com',
  projectId: 'medibox-bcf65',
  storageBucket: 'medibox-bcf65.appspot.com',
  messagingSenderId: '887339504905',
  appId: '1:887339504905:web:ce2af2c6afc45028db2fd8',
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
