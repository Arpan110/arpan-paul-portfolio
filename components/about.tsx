'use client'

import { Download, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { useState } from 'react'

const stats = [
  { value: '04+', label: 'Years experience' },
  { value: '10+', label: 'Completed projects' },
  { value: '20+', label: 'Technologies learned' },
]

export function About() {
  const [showResumePreview, setShowResumePreview] = useState(false)

  const handleResumeDownload = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Arpan_Paul_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleResumeView = () => {
    window.open('/Arpan-Paul-Resume.pdf', '_blank')
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">My Introduction</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              {/* Neon glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/50 to-primary rounded-2xl blur-2xl opacity-60 animate-pulse" />
              
              {/* Dashing neon border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-dashed animate-border-dash shadow-[0_0_30px_rgba(139,92,246,0.6)]" />
              
              {/* Image container with shiny overlay */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="Arpan-Paul-about.png"
                  alt="About Arpan Paul"
                  fill
                  className="object-cover"
                  loading="eager"
                  sizes="(max-width: 768px) 256px, 320px"
                  quality={85}
                />
                {/* Shiny overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-40" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-primary font-medium mb-4">Web Developer</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a Web Developer with a strong foundation in modern web technologies and a growing focus on practical AI exploration. My work centers on building websites that are structured, efficient and easy to use, while also looking for ways AI can streamline development and enhance user experience. What started as an interest in how websites operate has become a committed path where I create reliable, well-designed digital solutions supported by clean architecture and thoughtful problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-start">
              {/* Made button smaller and more compact as requested */}
              <a 
                href="/Arpan-Paul-Resume.pdf" 
                download 
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-primary/25 text-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              
              <a 
                href="/Arpan-Paul-Resume.pdf" 
                target="_blank"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors shadow-sm"
                title="View Resume"
              >
                <Eye className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
