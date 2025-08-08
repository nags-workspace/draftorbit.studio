// assets/js/main.js
// This is now the Master Controller for the site.

/**
 * Fetches HTML content from a file and injects it into a specified element.
 * @param {string} filePath The path to the HTML file to load.
 * @param {string} elementId The ID of the element to inject the HTML into.
 * @returns {Promise} A promise that resolves when the HTML is loaded.
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
                throw new Error(`Element with ID '${elementId}' not found.`);
            }
        });
}

// This function runs when the main HTML document (e.g., index.html) has finished loading.
document.addEventListener('DOMContentLoaded', () => {
    
    // Load the navbar.
    // The .then() block ensures that initializeAuthUI() is called ONLY AFTER the navbar is successfully loaded.
    loadHTML('navbar.html', 'navbar-placeholder')
        .then(() => {
            console.log("Navbar loaded successfully. Initializing authentication UI...");
            // Now that the navbar exists in the DOM, we can safely initialize the auth UI.
            initializeAuthUI(); 
        })
        .catch(error => {
            console.error("Error loading navbar:", error);
        });

    // Load the footer (optional, but good practice).
    loadHTML('footer.html', 'footer-placeholder')
        .catch(error => {
            console.error("Error loading footer:", error);
        });
});