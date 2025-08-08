// assets/js/page-renderer.js

document.addEventListener('DOMContentLoaded', () => {
  // Get the containers from the HTML template
  const titleElement = document.getElementById('page-title');
  const contentElement = document.getElementById('page-content');

  // Get the page ID from the URL (e.g., ?id=1)
  const urlParams = new URLSearchParams(window.location.search);
  const pageId = parseInt(urlParams.get('id'));

  // Find the correct page data from our "database"
  const pageData = pagesData.find(page => page.id === pageId);

  // Check if we found a matching page
  if (pageData) {
    // We found it! Now, inject the data into the page.
    document.title = `${pageData.title} - DraftOrbit Studio`;
    titleElement.textContent = pageData.title;
    contentElement.innerHTML = pageData.content;
  } else {
    // We didn't find a page with that ID. Show a "Not Found" error.
    document.title = '404 Not Found - DraftOrbit Studio';
    titleElement.textContent = '404 - Page Not Found';
    contentElement.innerHTML = `<p class="lead">Sorry, we couldn't find the page you were looking for. Please check the URL or return to the <a href="index.html">homepage</a>.</p>`;
  }
});