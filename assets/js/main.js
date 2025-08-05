// assets/js/main.js
document.addEventListener("DOMContentLoaded", function() {
    const loadHTML = (filePath, elementId) => {
        fetch(filePath)
            .then(response => response.ok ? response.text() : Promise.reject('File not found'))
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error(`Error loading ${filePath}:`, error));
    };

    // Load components with simple paths
    loadHTML('navbar.html', 'navbar-placeholder');
    loadHTML('footer.html', 'footer-placeholder');
});