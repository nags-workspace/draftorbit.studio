/* =================================================================
    DraftOrbit Studio - Master Controller Script
================================================================= */

/**
 * Fetches HTML content from a file and injects it into a specified element.
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
                console.warn(`Element with ID '${elementId}' not found in this document.`);
            }
        });
}

// Main execution starts after the initial HTML document has been loaded.
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Load Navbar and Initialize Authentication ---
    loadHTML('navbar.html', 'navbar-placeholder')
        .then(() => {
            console.log("Navbar loaded. Initializing authentication UI...");
            // This function should be in your auth.js file
            if (typeof initializeAuthUI === 'function') {
                initializeAuthUI(); 
            }
        })
        .catch(error => {
            console.error("Critical Error: Could not load navbar.html.", error);
        });

    // --- 2. Load Footer and Initialize Assistant Chat ---
    loadHTML('footer.html', 'footer-placeholder')
        .then(() => {
            // The footer's HTML is now loaded.
            // We can now safely call the function from assistant.js
            if (typeof initializeAssistant === 'function') {
                initializeAssistant();
            }
        })
        .catch(error => console.error("Critical Error: Could not load footer.html.", error));
});
