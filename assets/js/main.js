// assets/js/main.js

document.addEventListener("DOMContentLoaded", function() {
    const loadHTML = (filePath, elementId) => {
        return fetch(filePath) // Return the promise
            .then(response => {
                if (!response.ok) throw new Error(`Could not load ${filePath}`);
                return response.text();
            })
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            });
    };

    // Load Footer
    loadHTML('footer.html', 'footer-placeholder');

    // Load Navbar and THEN execute the callback function
    loadHTML('navbar.html', 'navbar-placeholder').then(() => {
        // The navbar is now guaranteed to be in the DOM.
        // Now we can safely call the function from auth.js.
        if (typeof initializeAuthUI === 'function') {
            initializeAuthUI();
        } else {
            console.error('Authentication UI function not found. Check if auth.js is loaded correctly.');
        }
    });
});