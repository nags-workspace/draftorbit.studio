// assets/js/pages-data.js
// This file acts as our simple database for all informational pages.

const pagesData = [
  {
    id: 'terms',
    title: 'Terms of Service',
    type: 'markdown',
    content: `
**Last Updated:** August 8, 2025

Please read these Terms of Service ("Terms") carefully. By accessing or using the website and services provided by DraftOrbit Studio ("we," "us," or "our"), you agree to be bound by these Terms and our [Privacy Policy](page.html?id=privacy).

### 1. User Accounts
To use most features of our service, you must register for an account. You agree to provide accurate, current, and complete information during registration. You are responsible for safeguarding your password and for all activities that occur under your account.

### 2. Intellectual Property
*   **Our Content:** All content on our website, including the logo, design, text, and graphics, is the exclusive property of DraftOrbit Studio and is protected by copyright and other intellectual property laws.
*   **Your Content:** You retain full ownership of the CAD files, designs, and other content you upload ("Your Content"). However, by submitting Your Content, you grant DraftOrbit Studio a limited, non-exclusive, worldwide license to use, copy, modify, and display Your Content solely for the purpose of providing and fulfilling the services you requested (e.g., providing a quote, printing your model, and for internal quality checks).

### 3. Marketing & Communication Consent
As part of our mission to grow and offer you the best value, we engage in marketing communications. By creating an account and agreeing to these Terms, you consent to receive marketing and promotional materials from us. As detailed in our [Privacy Policy](page.html?id=privacy), this includes newsletters, special offers, and company updates via email and SMS/text message. You may opt-out at any time.

### 4. Prohibited Conduct
You agree not to use the service to:
*   Upload any content that infringes on any patent, trademark, copyright, or other proprietary rights of any party.
*   Upload any content that is unlawful, harmful, or an item intended to be used as a weapon.
*   Transmit any software viruses or any other computer code, files, or programs designed to interrupt or limit the functionality of any computer software, hardware, or telecommunications equipment.

We reserve the right to refuse service and terminate accounts for any user who violates these terms.

### 5. Disclaimer of Warranties
The service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranty that the service will meet your requirements or be available on an uninterrupted, secure, or error-free basis.

### 6. Limitation of Liability
To the maximum extent permitted by law, DraftOrbit Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, resulting from your use of our services.

### 7. Changes to These Terms
We reserve the right to modify these Terms at any time. If we make changes, we will post the revised Terms on the site and update the "Last Updated" date. Your continued use of the service will constitute your acceptance of the revised Terms.

### 8. Contact Us
If you have any questions about these Terms, please contact us at [contact@draftorbit.studio](mailto:contact@draftorbit.studio).
    `
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    type: 'markdown',
    content: `
**Effective Date:** August 8, 2025

Welcome to DraftOrbit Studio. We are committed to protecting your privacy and being transparent about how we collect, use, and protect your personal information. This Privacy Policy explains our practices and your rights regarding your data.

### 1. Information We Collect
To provide and improve our services, we collect the following types of information:
*   **Information You Provide Directly:** When you create an account, request a quote, or contact us, you provide us with information such as your Full Name, Email Address, Phone Number, and a unique Username.
*   **Project Information:** We collect the files (e.g., CAD designs), specifications, and communications related to the projects you submit to us.
*   **Automatically Collected Information:** When you use our website, we automatically collect technical data, including your IP address, browser type, device information, and usage data about how you interact with our services. We use cookies and similar technologies to facilitate this.

### 2. How We Use Your Information
Your information is vital for our operations and growth. We use it for the following purposes:
*   **To Provide and Fulfill Our Services:** To create and manage your account, process your orders, manufacture your designs, and provide customer support.
*   **For Communication:** To send you transactional messages, such as order confirmations, status updates, and responses to your inquiries.
*   **For Marketing and Promotional Communications:** This is a key part of our growth. By creating an account and agreeing to this policy, you consent to receive promotional messages from us. This may include:
    *   **Email Newsletters:** Updates on new services, special offers, and company news sent to your email address.
    *   **SMS/Text Messages:** Promotional alerts, discounts, and marketing messages sent to the phone number you provide.
*   **For Service Improvement and Growth:** We analyze user behavior and feedback to understand what our customers need. This allows us to improve our existing services, develop new features, enhance website functionality, and scale our business to serve you better.
*   **For Security and Legal Compliance:** To protect our services from fraud and abuse, and to comply with applicable legal obligations.

### 3. How We Share Your Information
We do not sell your personal data. We may share your information only in the following circumstances:
*   **With Service Providers:** We work with with trusted third-party companies for services like web hosting, payment processing, and marketing communications (e.g., email and SMS providers). They are only given access to the information necessary to perform these tasks on our behalf.
*   **For Legal Reasons:** We may disclose your information if required by law or in response to a valid legal request.

### 4. Your Rights and Choices
You have control over your personal information:
*   **Access and Update:** You can review and edit your profile information at any time by visiting your [My Account](account.html) page.
*   **Opt-Out of Email Marketing:** You can unsubscribe from our promotional emails by clicking the "Unsubscribe" link located at the bottom of every email.
*   **Opt-Out of SMS Marketing:** You can opt-out of promotional text messages by replying "STOP" to any message you receive from us.
*   **Cookies:** You can configure your browser to reject cookies, but this may limit the functionality of our website.

### 5. Changes to This Policy
As our company grows and our services evolve, we may update this Privacy Policy. We will notify you of any significant changes by posting the new policy on this page and, where appropriate, through email.

### 6. Contact Us
If you have any questions about this Privacy Policy, please contact us at [contact@draftorbit.studio](mailto:contact@draftorbit.studio).
    `
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    type: 'markdown',
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
    type: 'html', // The content type is HTML because it contains a div structure
    content: `
      <p class="lead mb-5">Latest news, articles, and insights from the studio.</p>
      <!-- Blog posts will be dynamically injected here by page-renderer.js -->
      <div class="row" id="blog-posts-container">
          <div class="col-12 text-center">
              <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading posts...</span>
              </div>
          </div>
      </div>
    `
  }
];