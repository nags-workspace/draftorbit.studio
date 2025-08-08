// assets/js/pages-data.js

// This file acts as our simple database for all informational pages.
const pagesData = [
  {
    id: 1,
    title: 'Terms of Service',
    // The content property holds the raw HTML to be injected into the page.
    content: `
      <p class="text-muted">Last updated: August 2025</p>
      <h2 class="h4 mt-4">1. Introduction</h2>
      <p>Welcome to DraftOrbit Studio. These terms and conditions outline the rules and regulations for the use of our services.</p>
      
      <h2 class="h4 mt-4">2. Services</h2>
      <p>We provide 3D Printing and CAD Design services as described on our website. All services are subject to acceptance and availability.</p>
      
      <h2 class="h4 mt-4">3. Intellectual Property Rights</h2>
      <p>You retain all rights to the files you submit. By submitting a file, you grant us a license to manufacture the 3D model. We will not use or distribute your design for any other purpose.</p>
      
      <h2 class="h4 mt-4">4. Limitation of Liability</h2>
      <p>Our liability is limited to the cost of the service provided. We are not responsible for any direct or indirect damages arising from the use of our printed parts.</p>
    `
  },
  {
    id: 2,
    title: 'Privacy Policy',
    content: `
      <p class="text-muted">Last updated: August 2025</p>
      <h2 class="h4 mt-4">1. Information We Collect</h2>
      <p>We collect personal information such as your name and email address when you contact us. We also collect project files you submit for quoting and printing.</p>
      
      <h2 class="h4 mt-4">2. How We Use Your Information</h2>
      <p>We use your information to provide our services, process payments, and communicate with you about your order.</p>
      
      <h2 class="h4 mt-4">3. Data Security</h2>
      <p>We take reasonable measures to protect your personal information and project files from unauthorized access or disclosure.</p>
    `
  },
  {
    id: 3,
    title: 'Our Blog',
    content: `
      <p class="lead mb-5">Latest news, articles, and insights from the studio.</p>
      <div class="row">
          <!-- Blog Post 1 -->
          <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                  <img src="https://via.placeholder.com/600x400.png?text=Article+Image" class="card-img-top" alt="Blog Post Image">
                  <div class="card-body">
                      <h5 class="card-title">Choosing the Right Filament for Your Project</h5>
                      <p class="card-text text-muted">A deep dive into PLA, PETG, and other materials.</p>
                      <a href="#" class="btn btn-primary">Read More</a>
                  </div>
              </div>
          </div>
          <!-- Blog Post 2 -->
          <div class="col-md-6 mb-4">
              <div class="card h-100 shadow-sm">
                  <img src="https://via.placeholder.com/600x400.png?text=CAD+Tips" class="card-img-top" alt="Blog Post Image">
                  <div class="card-body">
                      <h5 class="card-title">5 Tips for Better 3D Printable Designs</h5>
                      <p class="card-text text-muted">Optimize your CAD models for stronger, cleaner prints.</p>
                      <a href="#" class="btn btn-primary">Read More</a>
                  </div>
              </div>
          </div>
      </div>
    `
  }
  // To add a new page (e.g., Newsletter), just copy a block above,
  // give it a new id (e.g., 4), and change the title and content.
];