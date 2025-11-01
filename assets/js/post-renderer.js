// assets/js/post-renderer.js
// This script renders a single blog post into the post.html template.

document.addEventListener('DOMContentLoaded', () => {
    const postContentArea = document.getElementById('post-content-area');

    if (!postContentArea) return;

    // Get the post slug from the URL (e.g., ?slug=choosing-the-right-filament)
    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('slug');

    // Find the correct post data from our "database"
    const post = blogData.find(p => p.slug === postSlug);

    if (post) {
        // We found the post!
        document.title = `${post.title} - DraftOrbit Studio`;

        const postHtml = `
            <header class="mb-4">
                <h1 class="fw-bolder mb-1">${post.title}</h1>
                <div class="text-muted fst-italic mb-2">
                    Posted on ${post.date} by ${post.author}
                </div>
            </header>
            <div class="post-content">
                ${marked.parse(post.content)}
            </div>
        `;
        postContentArea.innerHTML = postHtml;

    } else {
        // We didn't find a post with that slug
        document.title = 'Post Not Found - DraftOrbit Studio';
        const errorHtml = `
            <h1 class="fw-bolder mb-1 text-danger">404 - Post Not Found</h1>
            <p class="lead">Sorry, we couldn't find the article you were looking for. It might have been moved or deleted.</p>
        `;
        postContentArea.innerHTML = errorHtml;
    }
});