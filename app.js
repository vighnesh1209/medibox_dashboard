import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
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
const firebase=initializeApp(firebaseConfig);

const auth=getAuth(firebase);




  //Signup Function
let signUpButton = document.getElementById('signup')
signUpButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    const email = document.getElementById("inputEmail")
    const password = document.getElementById("inputPassword")
    
    createUserWithEmailAndPassword(auth,email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in 
      const user = userCredential.user;
      window.location = 'index.html';
      console.log("user",user.email)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error code", errorCode)
      console.log("error Message", errorMessage)
    });
});


let signInButton = document.getElementById('signin')
  signInButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()
    console.log("clicked")

    const email = document.getElementById("inputEmail")
    const password = document.getElementById("inputPassword")

    signInWithEmailAndPassword(auth,email.value, password.value) 
    .then((userCredential) => {
      // location.reload();
      // Signed in 
      var user = userCredential.user;
      console.log("user",user.email)
      window.location = "doctor.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert( errorMessage)
    });
})



