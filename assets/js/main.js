// assets/js/main.js
// The Master Controller for the website.

/**
 * Fetches HTML content from a file and injects it into a specified element.
 * This is our reusable component loader.
 * @param {string} filePath The path to the HTML file (e.g., 'navbar.html').
 * @param {string} elementId The ID of the element to inject the HTML into.
 * @returns {Promise} A promise that resolves when the HTML is successfully loaded.
 */
function loadHTML(filePath, elementId) {
    return fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                // This error is helpful for debugging new pages.
                console.warn(`Element with ID '${elementId}' not found in this document.`);
            }
        });
}

// This event fires as soon as the basic HTML of a page is loaded.
document.addEventListener('DOMContentLoaded', () => {
    
    // Load the navbar first. This is an asynchronous operation.
    loadHTML('navbar.html', 'navbar-placeholder')
        .then(() => {
            // SUCCESS! The navbar's HTML is now in the DOM.
            console.log("Navbar loaded. Initializing authentication UI...");
            
            // Now, and only now, we can safely call the function to manage the login/logout view.
            initializeAuthUI(); 
        })
        .catch(error => {
            // If the navbar fails to load, we'll know why.
            console.error("Critical Error: Could not load navbar.html.", error);
        });

    // We can also load the footer. This doesn't depend on anything else.
    loadHTML('footer.html', 'footer-placeholder');
});