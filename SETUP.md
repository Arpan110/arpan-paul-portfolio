# Arpan Paul's Portfolio - Setup Guide

## Overview
Modern, responsive portfolio website for Arpan Paul, Web Developer. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## Features Implemented

### 1. Loading Animation
- Smooth preloader with animated spinner and name reveal
- Automatically disappears after 2 seconds

### 2. Hero Section
- Floating profile image with neon border and glow effect
- Actual photo integrated
- Vertical social media links (LinkedIn, Instagram, GitHub)
- Responsive layout that adapts to all screen sizes

### 3. About Section
- Updated role: "Web Developer"
- Stats showing: 04+ years experience, 10+ projects, 20+ Technologies learned
- Professional description

### 4. Portfolio Section (6 Projects)
- Each project card includes:
  - Project title and description
  - Technology stack badges
  - "Code" button (links to GitHub repo)
  - "Live Demo" button (links to live site)
- Placeholder images (replace with your actual project screenshots)
- Projects to update with your real data:
  1. E-Commerce Platform
  2. Todo-App
  3. Portfolio Website
  4. Weather-App
  5. CineScope
  6. StudyGenie

### 5. Redesigned Footer
- Large "Let's build something new" call-to-action
- Email: arpan0325@gmail.com (clickable)
- Sitemap links
- Social media links
- Modern, spacious design

### 6. Contact Form with Email Integration
- Backend API route set up
- Sends emails to: **arpan0325@gmail.com**
- Form validation included

### 7. Background Design
- Subtle dot pattern across entire site
- Gradient overlay for depth
- Consistent with purple theme

## Email Setup Instructions

To enable the contact form to send real emails:

1. Go to your Google Account: https://myaccount.google.com/apppasswords
2. Create an "App Password" for this application
3. Add environment variables in Vercel (Vars section in sidebar):
   - `GMAIL_USER`: Your Gmail address (e.g., your-email@gmail.com)
   - `GMAIL_PASS`: The 16-character App Password you just created

**Important**: 
- DO NOT use your regular Gmail password
- App Passwords are more secure and designed for this purpose
- Without these variables, the form will log messages but won't send emails

## What to Update with Your Information

### 1. Social Links (Multiple files)
Update in:
- `components/hero.tsx` - lines with social links
- `components/footer.tsx` - social links section

Replace with your actual profiles:
\`\`\`tsx
{ icon: Linkedin, href: 'https://linkedin.com/in/your-username', label: 'LinkedIn' },
{ icon: Github, href: 'https://github.com/your-username', label: 'GitHub' },
{ icon: Instagram, href: 'https://instagram.com/your-username', label: 'Instagram' },
\`\`\`

### 2. Projects (components/portfolio.tsx)
Replace the mock projects with your real ones:
\`\`\`tsx
{
  title: 'Your Project Name',
  description: 'Brief description of what the project does',
  image: '/your-project-screenshot.png', // Add to public folder
  liveLink: 'https://your-project.com',
  githubLink: 'https://github.com/your-username/repo-name',
  techStack: ['React', 'Node.js', 'MongoDB'], // Your actual tech
}
\`\`\`

### 3. Resume Download (components/about.tsx)
Add your resume PDF to the public folder and update the button:
\`\`\`tsx
<Button size="lg" className="gap-2" asChild>
  <a href="/arpan-paul-resume.pdf" download>
    Download Resume <Download className="w-4 h-4" />
  </a>
</Button>
\`\`\`

### 4. Skills (components/skills.tsx)
Update with your actual skills and proficiency levels.

### 5. Qualification (components/qualification.tsx)
Add your real education and work experience timeline.

### 6. Services (components/services.tsx)
Update with the services you actually offer as a web developer.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: Nodemailer
- **Theme**: next-themes (dark/light mode)