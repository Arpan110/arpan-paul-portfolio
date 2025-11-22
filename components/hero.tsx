'use client'

import { Github, Linkedin, Instagram, Mail, ChevronDown, Download, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/arpan-paul-a204a3283/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/arpan.2510?igsh=bXNudXE1MmY4em94', label: 'Instagram' },
  { icon: Github, href: 'https://github.com/Arpan110', label: 'GitHub' },
]

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleResumeDownload = () => {
    // This will download the resume.pdf from the public folder
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Arpan_Paul_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-[100px_1fr_1fr] gap-12 items-center">
          {/* Social Links - Left Side */}
          <div className="hidden lg:flex flex-col gap-6 justify-center items-center">
            <div className="w-[1px] h-20 bg-border" />
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <div className="w-[1px] h-20 bg-border" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
                Hi, I&apos;m <br />
                <span className="text-primary">Arpan Paul</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
                Web Developer
              </h2>
              <h3 className="text-lg md:text-xl text-muted-foreground font-medium mb-4 lg:mb-6">
                📍 Kolkata, West Bengal, India
              </h3>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Passionate developer specializing in building exceptional digital experiences with modern technologies. I transform ideas into reality through clean code and creative design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={scrollToContact} size="lg" className="gap-2 text-lg px-8">
                Contact Me <Mail className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 text-lg px-8" 
                onClick={scrollToPortfolio}
              >
                View Work <Briefcase className="w-4 h-4" />
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="flex lg:hidden gap-6 justify-center pt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse" />
              
              <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-primary shadow-[0_0_30px_rgba(var(--primary),0.8),0_0_60px_rgba(var(--primary),0.4)] z-10 bg-background animate-border-dash">
                <Image
                  src="Arpan-Paul-profile.png"
                  alt="Arpan Paul"
                  fill
                  className="object-cover"
                  loading="eager"
                  sizes="(max-width: 768px) 288px, 384px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-30" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToAbout}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
