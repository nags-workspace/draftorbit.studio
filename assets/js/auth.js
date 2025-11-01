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
    // UPDATED: Get references to the new <li> elements
    const loggedInView = document.getElementById('logged-in-view-li');
    const loggedOutLogin = document.getElementById('logged-out-view-li-login');
    const loggedOutSignup = document.getElementById('logged-out-view-li-signup');
    const userEmailDisplay = document.getElementById('user-email-display');
    const logoutButton = document.getElementById('logout-button');
    const authDivider = document.getElementById('auth-divider');

    // If the navbar elements aren't on the page, we can't do anything.
    if (!loggedInView || !loggedOutLogin) {
        console.warn("Auth UI elements not found. Not an auth-enabled page or navbar failed to load.");
        return;
    }

    // Attach the logout click handler ONCE.
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        auth.signOut().then(() => {
            console.log('User signed out.');
            window.location.href = 'index.html';
        });
    });

    // This is Firebase's core listener. It fires whenever the auth state changes.
    auth.onAuthStateChanged(user => {
        if (user) {
            // --- USER IS LOGGED IN ---
            console.log("Auth state changed: User is LOGGED IN", user.email);
            loggedOutLogin.classList.add('d-none');
            loggedOutSignup.classList.add('d-none');
            loggedInView.classList.remove('d-none');
            authDivider.classList.remove('d-none'); // Show divider
            if (userEmailDisplay) {
                userEmailDisplay.textContent = user.email;
            }
        } else {
            // --- USER IS LOGGED OUT ---
            console.log("Auth state changed: User is LOGGED OUT");
            loggedOutLogin.classList.remove('d-none');
            loggedOutSignup.classList.remove('d-none');
            loggedInView.classList.add('d-none');
            authDivider.classList.add('d-none'); // Hide divider
        }
    });
}