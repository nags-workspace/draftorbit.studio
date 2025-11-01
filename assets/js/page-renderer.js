// assets/js/page-renderer.js

// Function to generate blog post cards for the main blog page
function renderBlogIndex() {
    const container = document.getElementById('blog-posts-container');
    if (!container) return;

    let postsHtml = '';
    blogData.forEach(post => {
        postsHtml += `
            <div class="col-md-6 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${post.imageUrl}" class="card-img-top" alt="${post.title}" style="aspect-ratio: 16/9; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text text-muted">${post.excerpt}</p>
                        <a href="post.html?slug=${post.slug}" class="btn btn-primary mt-auto">Read More</a>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = postsHtml;
}

document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('page-title');
    const contentElement = document.getElementById('page-content');
    const urlParams = new URLSearchParams(window.location.search);
    const pageId = urlParams.get('id');
    const pageData = pagesData.find(page => page.id === pageId);

    if (pageData) {
        document.title = `${pageData.title} - DraftOrbit Studio`;
        titleElement.textContent = pageData.title;

        if (pageData.type === 'html') {
            contentElement.innerHTML = pageData.content;
        } else {
            contentElement.innerHTML = marked.parse(pageData.content);
        }

        // === THIS IS NEW ===
        // If this is the main blog page, render the post index
        if (pageId === 'blog') {
            renderBlogIndex();
        }
        // === END OF NEW SECTION ===

    } else {
        document.title = '404 Not Found - DraftOrbit Studio';
        titleElement.textContent = '404 - Page Not Found';
        contentElement.innerHTML = `<p class="lead">Sorry, we couldn't find the page you were looking for. Please check the URL or return to the <a href="index.html">homepage</a>.</p>`;
    }
});