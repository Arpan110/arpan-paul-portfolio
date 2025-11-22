'use client'

import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, Tech Company',
    image: '/professional-man.jpg',
    content:
      'Arpan is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and technical expertise are outstanding.',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    role: 'Product Manager',
    image: '/professional-woman-diverse.png',
    content:
      'Working with Arpan was a pleasure. He understood our requirements perfectly and created a solution that was both elegant and functional.',
    rating: 5,
  },
  {
    name: 'Mike Johnson',
    role: 'Startup Founder',
    image: '/entrepreneur.png',
    content:
      'Arpan helped us build our MVP from scratch. His full-stack expertise and problem-solving skills were invaluable to our success.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
          <p className="text-muted-foreground">What Clients Say</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
