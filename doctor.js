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
  apiKey: "AIzaSyBkuk_Xqs-YLtdXvvdrfTdb_6oHOfcBUYM",
  authDomain: "patient-fa6b4.firebaseapp.com",
  projectId: "patient-fa6b4",
  storageBucket: "patient-fa6b4.appspot.com",
  messagingSenderId: "841970295158",
  appId: "1:841970295158:web:ba4215163b19529e0fda57",
  measurementId: "G-M44EB1359E"
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



