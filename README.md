# Arpan Paul - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript.

## Features

- **Loading Animation**: Beautiful preloader with progress bar
- **Floating Background**: Animated shapes in the background for visual interest
- **Dark/Light Mode**: Theme toggle with persistent preferences
- **Smooth Animations**: Scroll animations and transitions throughout
- **Responsive Design**: Mobile-first design that works on all devices
- **Contact Form**: Integrated with email backend using nodemailer
- **Resume Download**: Download resume PDF functionality

## Sections

1. **Hero**: Introduction with social links and animated profile picture
2. **About**: Personal information with downloadable resume
3. **Skills**: Technical skills showcase
4. **Qualification**: Education and work experience with certificates
5. **Services**: Web Development, AI Implementation, UI/UX Design, Content Writing
6. **Portfolio**: Project showcase with live demos and GitHub links
7. **Contact**: Contact form with email integration
8. **Footer**: Social links and sitemap

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Email**: Nodemailer
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Gmail account for email functionality

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_PASS`: Gmail App Password (not your regular password)

4. Add your resume PDF to `public/resume.pdf`

5. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

6. Open [http://localhost:3000](http://localhost:3000)

## Email Setup

To enable the contact form:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate an App Password at [App Passwords](https://myaccount.google.com/apppasswords)
4. Add `GMAIL_USER` and `GMAIL_PASS` to your environment variables in Vercel

## Customization

### Update Personal Information

- **Name**: Update in all component files
- **Profile Image**: Replace the image URL in `hero.tsx` and `about.tsx`
- **Resume**: Replace `public/resume.pdf` with your actual resume
- **Projects**: Update project data in `components/portfolio.tsx`
- **Skills**: Update skills in `components/skills.tsx`
- **Qualifications**: Update education/work in `components/qualification.tsx`

### Update Social Links

Update the social links in:
- `components/hero.tsx`
- `components/footer.tsx`

### Update Email

Change the email address in:
- `components/footer.tsx`
- `components/contact.tsx`

## Deployment

This portfolio is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## License

This project is licensed under the MIT License.

## Contact

Arpan Paul - arpan0325@gmail.com

---

Made with ♥ by Arpan Paul
