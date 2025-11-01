/* =================================================================
    DraftOrbit Studio - Master Controller Script
    
    This script is the entry point for the site's JavaScript. It:
    - Waits for the main HTML document to be ready.
    - Loads reusable HTML components like the navbar and footer.
    - Initializes other scripts (like the AI assistant) AFTER their
      required HTML has been loaded onto the page.
================================================================= */

/**
 * Fetches HTML content from a file and injects it into a specified element.
 * @param {string} filePath The path to the HTML file (e.g., 'navbar.html').
 * @param {string} elementId The ID of the element to inject the HTML into.
 * @returns {Promise<void>} A promise that resolves when the HTML is loaded or rejects on error.
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
                // This is a warning, not an error, as some pages might not have all placeholders.
                console.warn(`Element with ID '${elementId}' not found in this document.`);
            }
        });
}

// Main execution starts after the initial HTML document has been fully loaded.
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("DOM loaded. Starting to load components...");

    // Create promises for loading the navbar and footer
    const loadNavbarPromise = loadHTML('navbar.html', 'navbar-placeholder');
    const loadFooterPromise = loadHTML('footer.html', 'footer-placeholder');

    // Wait for both the navbar and footer to finish loading
    Promise.all([loadNavbarPromise, loadFooterPromise])
        .then(() => {
            console.log("Navbar and Footer loaded successfully.");
            
            // Now that all HTML components are loaded, initialize other scripts that depend on them.
            
            // Initialize the Authentication UI (from auth.js)
            // This needs the navbar to be loaded first.
            if (typeof initializeAuthUI === 'function') {
                initializeAuthUI();
            } else {
                 console.warn("initializeAuthUI function not found. This might be expected on standalone auth pages.");
            }

            // Initialize the AI Assistant (from assistant.js)
            // This needs the footer (which contains the assistant HTML) to be loaded first.
            if (typeof initializeAssistant === 'function') {
                initializeAssistant();
            } else {
                console.error("CRITICAL: initializeAssistant function not found! Check that assistant.js is included correctly in your HTML files.");
            }
        })
        .catch(error => {
            console.error("An error occurred while loading HTML components:", error);
        });
});