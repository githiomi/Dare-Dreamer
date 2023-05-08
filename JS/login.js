// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";

// For the Database
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

// For authentication
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCzsjVYb3ZW1Vxgqnp_FhN8WdNAHXe9mtw",
    authDomain: "dare-dreamer.firebaseapp.com",
    projectId: "dare-dreamer",
    storageBucket: "dare-dreamer.appspot.com",
    messagingSenderId: "984520186998",
    appId: "1:984520186998:web:8bcda2cadb5ff1c1b69357",
    measurementId: "G-L4VHEZVS05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();

// Add event listener to the sign up button
let loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', (e) => {

    // What happens when the sign up button is clicked
    e.preventDefault();

    // Get user data
    let emailAddress = document.getElementById('emailAddress').value;
    let password = document.getElementById('password').value;

    console.log(emailAddress, password);


    console.log("Logging in...");
    // Login the Firebase user
    signInWithEmailAndPassword(auth, emailAddress, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            
            // Update the UI
            console.log(`${user} has been logged in`)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // Update UI
            alert(`User could not be logged in! -----> Error code ${errorCode}`);
            console.log(`There has been an error! \n-----> Error message: ${errorMessage}`);
        });
})