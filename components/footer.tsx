import Link from 'next/link'
import { Github, Linkedin, Instagram, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arpan-paul-a204a3283/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Arpan110', label: 'GitHub' },
  { icon: Instagram, href: 'https://www.instagram.com/arpan.2510?igsh=bXNudXE1MmY4em94', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let&apos;s build <br />
              <span className="text-primary">something new.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Creating user-centric, delightful, and human experiences. 
              I&apos;m always open to discussing new projects and opportunities.
            </p>
            <a 
              href="mailto:arpan0325@gmail.com" 
              className="inline-flex items-center gap-2 text-xl font-medium hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
              arpan0325@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-items-center">
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Sitemap</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
                <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Socials</h3>
              <ul className="space-y-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {social.icon && <social.icon className="w-6 h-6" />}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-230">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Arpan Paul. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> by Arpan
          </p>
        </div>
      </div>
    </footer>
  )
}
