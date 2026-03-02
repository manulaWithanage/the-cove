# The Cove at Rikillagaskada

A modern, mobile-first marketing website for a scenic cabana stay in Sri Lanka.
Built with Next.js App Router, Tailwind CSS v4, and TypeScript.

## 🚀 Setup & Run

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## ✏️ How to Update Content & Assets

### 1. Global Details (Phone, Email, URLs)
Update the `siteConfig` object inside `src/lib/constants.ts`.
This controls the global brand name, WhatsApp deep links, and SEO metadata.

### 2. Text & Copy
Navigate to the `src/components/sections/` folder.
* **Hero Text:** Edit `Hero.tsx`.
* **Cabana Details & Prices:** Edit `Cabanas.tsx`.
* **Experiences & Testimonials:** Edit `Experiences.tsx` and `Testimonials.tsx`.
* **FAQ:** Add or remove questions in `LocationFAQ.tsx`.

### 3. Images & Placeholder Gradients
Currently, images are placeholder gradients with "TODO" text. 
To update them:
1. Place your actual high-quality JPEG/PNG/WebP files inside the `public/images/` directory.
2. Ensure their filenames match the placeholders, such as `hero.jpg`, `cabana-1.jpg`, `gallery-1.jpg`, etc.
3. Replace the `TODO` gradient `div` tags in components (like `Hero.tsx`, `Cabanas.tsx`, `Gallery.tsx`) with the `<img />` or `<Image />` component pointing to `/images/your-file.jpg`.

## 📧 Connecting the Contact Form to Email

The inquiry form is located at `src/components/sections/ContactForm.tsx`.
It currently logs submissions to the Node.js console via Next.js Server Actions.

To send real emails (e.g., using **Resend**):
1. Install Resend: `npm install resend`
2. Get an API key from [resend.com](https://resend.com) and add it to your `.env.local` file:
   ```env
   RESEND_API_KEY=re_123456789
   ```
3. Open `src/app/actions/contact.ts`.
4. Import Resend and replace the `console.log` block with:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   await resend.emails.send({
     from: 'onboarding@resend.dev',
     to: siteConfig.contact.email,
     subject: `New Booking Inquiry from ${data.name}`,
     html: `<p>Dates: ${data.dates}</p><p>Guests: ${data.guests}</p><p>Phone: ${data.phone}</p><p>Message: ${data.message}</p>`
   });
   ```

## 🔒 Security & Spam Prevention
The form includes a simple "Honeypot" field (`bot_field`), which is hidden from real users. Bots that auto-fill hidden fields will trigger a silent rejection pattern built into `src/app/actions/contact.ts`.
