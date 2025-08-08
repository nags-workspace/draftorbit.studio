// assets/js/main.js
// This file now ONLY defines the function for loading HTML.

function loadHTML(filePath, elementId) {
    // Return the fetch promise so we can chain .then() to it
    return fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Could not load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}