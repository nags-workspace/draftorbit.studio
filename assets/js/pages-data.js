// assets/js/pages-data.js

// This file acts as our simple database for all informational pages.
const pagesData = [
  {
    id: 'terms',
    title: 'Terms of Service',
    content: `
      <p class="text-muted"><strong>Last Updated:</strong> August 8, 2025</p>
      <p>Please read these Terms of Service ("Terms") carefully. By accessing or using the website and services provided by DraftOrbit Studio ("we," "us," or "our"), you agree to be bound by these Terms and our <a href="page.html?id=2">Privacy Policy</a>.</p>

      <h3 class="mt-5">1. User Accounts</h3>
      <p>To use most features of our service, you must register for an account. You agree to provide accurate, current, and complete information during registration. You are responsible for safeguarding your password and for all activities that occur under your account.</p>

      <h3 class="mt-5">2. Intellectual Property</h3>
      <ul>
          <li><strong>Our Content:</strong> All content on our website, including the logo, design, text, and graphics, is the exclusive property of DraftOrbit Studio and is protected by copyright and other intellectual property laws.</li>
          <li><strong>Your Content:</strong> You retain full ownership of the CAD files, designs, and other content you upload ("Your Content"). However, by submitting Your Content, you grant DraftOrbit Studio a limited, non-exclusive, worldwide license to use, copy, modify, and display Your Content solely for the purpose of providing and fulfilling the services you requested (e.g., providing a quote, printing your model, and for internal quality checks).</li>
      </ul>

      <h3 class="mt-5">3. Marketing & Communication Consent</h3>
      <p>As part of our mission to grow and offer you the best value, we engage in marketing communications. By creating an account and agreeing to these Terms, you consent to receive marketing and promotional materials from us. As detailed in our <a href="page.html?id=2">Privacy Policy</a>, this includes newsletters, special offers, and company updates via email and SMS/text message. You may opt-out at any time.</p>

      <h3 class="mt-5">4. Prohibited Conduct</h3>
      <p>You agree not to use the service to:</p>
      <ul>
          <li>Upload any content that infringes on any patent, trademark, copyright, or other proprietary rights of any party.</li>
          <li>Upload any content that is unlawful, harmful, or an item intended to be used as a weapon.</li>
          <li>Transmit any software viruses or any other computer code, files, or programs designed to interrupt or limit the functionality of any computer software, hardware, or telecommunications equipment.</li>
      </ul>
      <p>We reserve the right to refuse service and terminate accounts for any user who violates these terms.</p>

      <h3 class="mt-5">5. Disclaimer of Warranties</h3>
      <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranty that the service will meet your requirements or be available on an uninterrupted, secure, or error-free basis.</p>

      <h3 class="mt-5">6. Limitation of Liability</h3>
      <p>To the maximum extent permitted by law, DraftOrbit Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of our services.</p>

      <h3 class="mt-5">7. Changes to These Terms</h3>
      <p>We reserve the right to modify these Terms at any time. If we make changes, we will post the revised Terms on the site and update the "Last Updated" date. Your continued use of the service will constitute your acceptance of the revised Terms.</p>
      
      <h3 class="mt-5">8. Contact Us</h3>
      <p>If you have any questions about these Terms, please contact us at <a href="mailto:contact@draftorbit.studio">contact@draftorbit.studio</a>.</p>
    `
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    content: `
      <p class="text-muted"><strong>Effective Date:</strong> August 8, 2025</p>
      <p>Welcome to DraftOrbit Studio. We are committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information. This Privacy Policy explains our practices and your rights regarding your data.</p>

      <h3 class="mt-5">1. Information We Collect</h3>
      <p>To provide and improve our services, we collect the following types of information:</p>
      <ul>
          <li><strong>Information You Provide Directly:</strong> When you create an account, request a quote, or contact us, you provide us with information such as your Full Name, Email Address, Phone Number, and a unique Username.</li>
          <li><strong>Project Information:</strong> We collect the files (e.g., CAD designs), specifications, and communications related to the projects you submit to us.</li>
          <li><strong>Automatically Collected Information:</strong> When you use our website, we automatically collect technical data, including your IP address, browser type, device information, and usage data about how you interact with our services. We use cookies and similar technologies to facilitate this.</li>
      </ul>

      <h3 class="mt-5">2. How We Use Your Information</h3>
      <p>Your information is vital for our operations and growth. We use it for the following purposes:</p>
      <ul>
          <li><strong>To Provide and Fulfill Our Services:</strong> To create and manage your account, process your orders, manufacture your designs, and provide customer support.</li>
          <li><strong>For Communication:</strong> To send you transactional messages, such as order confirmations, status updates, and responses to your inquiries.</li>
          <li><strong>For Marketing and Promotional Communications:</strong> This is a key part of our growth. By creating an account and agreeing to this policy, you consent to receive promotional messages from us. This may include:
              <ul>
                  <li><strong>Email Newsletters:</strong> Updates on new services, special offers, and company news sent to your email address.</li>
                  <li><strong>SMS/Text Messages:</strong> Promotional alerts, discounts, and marketing messages sent to the phone number you provide.</li>
              </ul>
              You can opt-out of these communications at any time, as described in Section 4.
          </li>
          <li><strong>For Service Improvement and Growth:</strong> We analyze user behavior and feedback to understand what our customers need. This allows us to improve our existing services, develop new features, enhance website functionality, and scale our business to serve you better.</li>
          <li><strong>For Security and Legal Compliance:</strong> To protect our services from fraud and abuse, and to comply with applicable legal obligations.</li>
      </ul>

      <h3 class="mt-5">3. How We Share Your Information</h3>
      <p>We do not sell your personal data. We may share your information only in the following circumstances:</p>
      <ul>
          <li><strong>With Service Providers:</strong> We work with trusted third-party companies for services like web hosting, payment processing, and marketing communications (e.g., email and SMS providers). They are only given access to the information necessary to perform these tasks on our behalf.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if required by law or in response to a valid legal request.</li>
      </ul>

      <h3 class="mt-5">4. Your Rights and Choices</h3>
      <p>You have control over your personal information:</p>
      <ul>
          <li><strong>Access and Update:</strong> You can review and edit your profile information at any time by visiting your <a href="account.html">My Account</a> page.</li>
          <li><strong>Opt-Out of Email Marketing:</strong> You can unsubscribe from our promotional emails by clicking the "Unsubscribe" link located at the bottom of every email.</li>
          <li><strong>Opt-Out of SMS Marketing:</strong> You can opt-out of promotional text messages by replying "STOP" to any message you receive from us.</li>
          <li><strong>Cookies:</strong> You can configure your browser to reject cookies, but this may limit the functionality of our website.</li>
      </ul>

      <h3 class="mt-5">5. Changes to This Policy</h3>
      <p>As our company grows and our services evolve, we may update this Privacy Policy. We will notify you of any significant changes by posting the new policy on this page and, where appropriate, through email.</p>

      <h3 class="mt-5">6. Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@draftorbit.studio">contact@draftorbit.studio</a>.</p>
    `
  },
  // You can add more page objects here in the future
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    content: `
### General Questions
**What is DraftOrbit Studio?**
We are a 3D printing and custom CAD design studio focused on helping creators, students, and businesses bring their ideas to life through rapid prototyping.

**Where are you located?**
We are based in Mandya, Karnataka, India.

### Service Questions
**What kind of 3D printing do you offer?**
We specialize in Fused Deposition Modeling (FDM), which is excellent for creating strong, functional prototypes and models.

**What materials can you print with?**
Our primary materials are PLA, PETG, and ABS, each suited for different needs from general-purpose models to durable, heat-resistant parts.

**How do I get a quote for my project?**
The best way is to visit our [Instant Quote](quote.html) page. You can upload your STL file, select a material, and get a price estimate immediately.

### Order & Shipping Questions
**What is your typical turnaround time?**
Most projects are completed and ready for shipping within 3-5 business days. This can vary depending on the complexity and size of your print.

**Do you ship across India?**
Yes, we provide shipping services to locations all across India.
    `
  },

{
    id: 'blog',
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