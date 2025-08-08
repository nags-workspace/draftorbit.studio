// assets/js/auth.js
// The Authentication Engine. Manages UI changes based on login state.

// NOTE: We assume the firebase-app and firebase-auth scripts are already loaded in the HTML.
const firebaseConfig = {
  apiKey: "AIzaSyBEb1sB_AXKGxam3si8m81LPgr3b8HXTvg",
  authDomain: "draftorbit-web.firebaseapp.com",
  projectId: "draftorbit-web",
  storageBucket: "draftorbit-web.firebasestorage.app",
  messagingSenderId: "687122816959",
  appId: "1:687122816959:web:a495dc656f84f2e6b24b0a",
  measurementId: "G-7DTWGJQ4K9"
};

// Initialize Firebase App
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// Get a shorthand for the auth service
const auth = firebase.auth();

/**
 * This is the main function that main.js will call.
 * It sets up the UI listeners for the navbar.
 */
function initializeAuthUI() {
    const loggedInView = document.getElementById('logged-in-view');
    const loggedOutView = document.getElementById('logged-out-view');
    const userEmailDisplay = document.getElementById('user-email-display');
    const logoutButton = document.getElementById('logout-button');

    // If the navbar elements aren't on the page, we can't do anything.
    if (!loggedInView || !loggedOutView) {
        console.warn("Auth UI elements not found. Not an auth-enabled page or navbar failed to load.");
        return;
    }

    // Attach the logout click handler ONCE.
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log('User signed out.');
            // Redirect to home page for a clean user experience after logout.
            window.location.href = '/index.html';
        });
    });

    // This is Firebase's core listener. It fires whenever the auth state changes.
    auth.onAuthStateChanged(user => {
        if (user) {
            // --- USER IS LOGGED IN ---
            console.log("Auth state changed: User is LOGGED IN", user.email);
            loggedOutView.classList.add('d-none'); // Hide "Login/Sign Up"
            loggedInView.classList.remove('d-none'); // Show "Account" dropdown
            userEmailDisplay.textContent = user.email;
        } else {
            // --- USER IS LOGGED OUT ---
            console.log("Auth state changed: User is LOGGED OUT");
            loggedOutView.classList.remove('d-none'); // Show "Login/Sign Up"
            loggedInView.classList.add('d-none'); // Hide "Account" dropdown
        }
    });
}