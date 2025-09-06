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

    // --- 1. Load Navbar (Optional, but good practice) ---
    // If a page doesn't have a navbar-placeholder, it will just log a warning.
    loadHTML('navbar.html', 'navbar-placeholder')
        .then(() => {
            console.log("Navbar loaded successfully.");
            // You can add navbar-specific JS initialization here if needed.
        })
        .catch(error => {
            console.warn("Could not load navbar.html. This may be expected on some pages.", error);
        });

    // --- 2. Load Footer and THEN Initialize the AI Assistant ---
    // This is the critical part. The assistant JS needs the footer's HTML to exist first.
    loadHTML('footer.html', 'footer-placeholder')
        .then(() => {
            console.log("Footer loaded. Initializing Gemini assistant...");
            
            // Defensive check: ensure the initializeAssistant function actually exists before calling it.
            // This prevents errors if assistant.js fails to load.
            if (typeof initializeAssistant === 'function') {
                initializeAssistant();
            } else {
                console.error("CRITICAL: initializeAssistant function not found! Check that assistant.js is included correctly BEFORE main.js in your HTML file.");
            }
        })
        .catch(error => console.error("CRITICAL ERROR: Could not load footer.html. The assistant cannot be initialized.", error));
});