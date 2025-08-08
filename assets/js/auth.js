// assets/js/auth.js

// =======================================================================
// PASTE YOUR FIREBASE CONFIGURATION OBJECT HERE
// =======================================================================
const firebaseConfig = {
  apiKey: "AIzaSyBEb1sB_AXKGxam3si8m81LPgr3b8HXTvg",
  authDomain: "draftorbit-web.firebaseapp.com",
  projectId: "draftorbit-web",
  storageBucket: "draftorbit-web.firebasestorage.app",
  messagingSenderId: "687122816959",
  appId: "1:687122816959:web:a495dc656f84f2e6b24b0a",
  measurementId: "G-7DTWGJQ4K9"
};

// Initialize Firebase (only if it hasn't been initialized already)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();


// This is the main function that main.js will call AFTER the navbar is loaded.
function initializeAuthUI() {
    const loggedInView = document.getElementById('logged-in-view');
    const loggedOutView = document.getElementById('logged-out-view');
    
    // Listen for login state changes
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            loggedInView.classList.remove('d-none');
            loggedOutView.classList.add('d-none');
            
            document.getElementById('user-email-display').textContent = user.email;

            document.getElementById('logout-button').addEventListener('click', e => {
                e.preventDefault();
                auth.signOut().then(() => {
                    window.location.href = 'index.html';
                });
            });
        } else {
            // User is signed out
            loggedOutView.classList.remove('d-none');
            loggedInView.classList.add('d-none');
        }
    });
}