'use client'

import { ExternalLink, Github, Code2 } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
// using native <img> instead of next/image because next/image types/module is not available

const projects = [
  {
    title: 'ShopNest---Real-Time-E-Commerce-Platform',
    description: 'ShopNest is a dynamic and responsive E-Commerce Web App built with React, Node.js, and Stripe. Inspired by platforms like BigBasket....',
    image: '/ecommerce-concept.png',
    liveLink: 'https://shop-nest-19f8cc.netlify.app/',
    githubLink: 'https://github.com/Arpan110/ShopNest---Real-Time-E-Commerce-Platform',
    techStack: ['React.js', 'Next.js', 'Vite', 'Tailwind CSS', 'Firebase', 'Context API', 'Stripe API', 'Node.js + Express', 'MongoDB'],
  },
  {
    title: 'Todo-App',
    description: 'This is a simple and functional To-Do List Web Application that allows users to add, edit, delete, and mark tasks as completed.',
    image: '/to-do-app.png',
    liveLink: 'https://to-do-app-5b6ec1.netlify.app/',
    githubLink: 'https://github.com/Arpan110/Todo-App',
    techStack: ['React', 'Tailwind CSS', 'Redix UI', 'Local Storage API'],
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations, dark mode, and responsive design to showcase creative work.',
    image: '/creative-portfolio-layout.png',
    liveLink: 'https://arpan-paul.vercel.app/',
    githubLink: 'https://github.com/Arpan110/arpan-paul-portfolio',
    techStack: ['Next.js 15 (App Router)', 'React 19', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript', 'Shadcn/ui', 'Nodemailer', 'Vercel'],
  },
  {
    title: 'Weather-App',
    description: 'Real-time weather application providing detailed forecasts, and location-based updates. A modern, responsive weather application built with React...',
    image: '/weather-scene.png',
    liveLink: 'https://weather-app-6a74ba.netlify.app/',
    githubLink: 'https://github.com/Arpan110/Weather-App',
    techStack: ['React 18', 'TypeScript', 'OpenWeatherMap API', 'Lucide React', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'CineScope',
    description: 'CineScope is a modern and responsive Movie Browser web application built to help users discover, search, and explore movies and TV shows with ease. Powered by The Movie Database (TMDB) API, it delivers real-time information on trending, upcoming, and popular media content from around the world.',
    image: '/cinescope.png',
    liveLink: 'https://cine-scope-b096d.netlify.app/',
    githubLink: 'https://github.com/Arpan110/CineScope',
    techStack: ['React.js', 'Next.js', 'Tailwind CSS', 'TMDB API', 'Firebase'],
  },
  {
    title: 'StudyGenie',
    description: 'StudyGenie is a smart web application designed to enhance the productivity of students by combining AI-powered features.',
    image: '/study-genie.png',
    liveLink: 'https://study-genie-9mkm.vercel.app/',
    githubLink: 'https://github.com/Arpan110/StudyGenie',
    techStack: ['React.js', 'Next.js 14', 'Gemini API', 'Tailwind CSS', 'Radix UI'],
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <CardHeader className="p-6 pb-2">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
              </CardHeader>
              
              <CardContent className="p-6 pt-2 flex-grow">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1 gap-2" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Arpan110" target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github className="w-5 h-5" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
