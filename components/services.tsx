'use client'

import { useState } from 'react'
import { Code, Sparkles, Palette, PenTool, ArrowRight, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    details: [
      'Responsive web applications with modern frameworks',
      'Full-stack development using Next.js and React',
      'RESTful API design and integration',
      'Performance optimization and SEO',
      'Database design and management',
    ],
  },
  {
    icon: Sparkles,
    title: 'AI Implementation',
    details: [
      'AI chatbot integration for customer support',
      'Machine learning model deployment',
      'Natural language processing solutions',
      'AI-powered automation and workflows',
      'Custom AI solutions tailored to your needs',
    ],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    details: [
      'User-centered interface design',
      'Responsive and mobile-first layouts',
      'Interactive prototypes and wireframes',
      'Accessibility-focused design',
      'Modern design systems and components',
    ],
  },
  {
    icon: PenTool,
    title: 'Content Writing',
    details: [
      'Technical documentation and API guides',
      'Engaging blog posts and articles',
      'SEO-optimized web content',
      'Clear and concise copy for websites',
      'Code documentation and tutorials',
    ],
  },
]

export function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground">What I Offer</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="link"
                  className="p-0 h-auto gap-2"
                  onClick={() => setSelectedService(index)}
                >
                  View more <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {selectedService !== null && services[selectedService].title}
              </DialogTitle>
            </DialogHeader>
            <ul className="space-y-3 mt-4">
              {selectedService !== null &&
                services[selectedService].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
