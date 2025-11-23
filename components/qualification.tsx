'use client'

import { useState } from 'react'
import { GraduationCap, Briefcase, Calendar, ExternalLink } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'

const education = [
  {
    title: 'Secondary Education (WBBSE)',
    institution: 'Ariadaha Kalachand High School',
    date: '2018 - 2020',
    certificate: '/Secondary-cert.png',
  },
  {
    title: 'Higher Secondary Education (WBCHSE)',
    institution: 'Dakshineswar High School',
    date: '2020 - 2022',
    certificate: '/HS-cert.png',
  },
  {
    title: 'Certificate in Advanced Computer Programming & Applications',
    institution: 'Ramakrishna Mission Shilpamandira Computer Centre (RKMSCC)',
    date: '15/04/2020 - 20/06/2022',
    certificate: '/CACPA-cert.png',
  },
  {
    title: 'B.Tech in Computer Science & Engineering (MAKAUT)',
    institution: 'Dr. Sudhir Chandra Sur Institute of Technology & Sports Complex',
    date: '2022 - 2026',
    certificate: '/Graduation-cert.png',
  },
]

const work = [
  {
    title: 'Web Developer Intern',
    institution: 'Cenvexa',
    date: '07/07/2025 - 06/10/2025',
    certificate: '/Cenvexa-cert.png',
  },
  {
    title: 'Team Lead - AI Agent Architect Training',
    institution: 'IBM SkillsBuild',
    date: '04/07/2025 - 07/08/2025',
    certificate: '/PBL-cert.png',
  },
  {
    title: 'Skill Training in Advanced Computer Programming & Applications',
    institution: 'National Skills Development Corporation (NSDC)',
    date: '2021 - 2022',
    certificate: '/NSDC-cert.png',
  },
]

export function Qualification() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

  return (
    <section id="qualification" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Qualification</h2>
          <p className="text-muted-foreground">My Journey</p>
        </div>

        <Tabs defaultValue="education" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="education" className="gap-2">
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="work" className="gap-2">
              <Briefcase className="w-4 h-4" />
              Work
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

              <div className="space-y-12">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                    }`}
                  >
                    {index % 2 === 0 ? (
                      <>
                        {/* Left side - Content */}
                        <div className="md:pr-12">
                          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-3">{item.institution}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </div>
                          </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                        {/* Right side - Certificate */}
                        <div className="md:pl-12">
                          <div className="relative group/cert h-48 rounded-lg overflow-hidden border bg-card">
                            <Image
                              src={item.certificate || "/placeholder.svg"}
                              alt={`${item.title} Certificate`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover/cert:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                              <button
                                onClick={() => setSelectedCertificate(item.certificate)}
                                className="opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Certificate
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left side - Certificate */}
                        <div className="md:pr-12 order-2 md:order-1">
                          <div className="relative group/cert h-48 rounded-lg overflow-hidden border bg-card">
                            <Image
                              src={item.certificate || "/placeholder.svg"}
                              alt={`${item.title} Certificate`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover/cert:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                              <button
                                onClick={() => setSelectedCertificate(item.certificate)}
                                className="opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Certificate
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                        {/* Right side - Content */}
                        <div className="md:pl-12 order-1 md:order-2">
                          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-3">{item.institution}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="work">
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block" />

              <div className="space-y-12">
                {work.map((item, index) => (
                  <div
                    key={index}
                    className={`relative grid md:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                    }`}
                  >
                    {index % 2 === 0 ? (
                      <>
                        {/* Left side - Content */}
                        <div className="md:pr-12">
                          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-3">{item.institution}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground md:justify-end">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </div>
                          </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                        {/* Right side - Certificate */}
                        <div className="md:pl-12">
                          <div className="relative group/cert h-48 rounded-lg overflow-hidden border bg-card">
                            <Image
                              src={item.certificate || "/placeholder.svg"}
                              alt={`${item.title} Certificate`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover/cert:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                              <button
                                onClick={() => setSelectedCertificate(item.certificate)}
                                className="opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Certificate
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Left side - Certificate */}
                        <div className="md:pr-12 order-2 md:order-1">
                          <div className="relative group/cert h-48 rounded-lg overflow-hidden border bg-card">
                            <Image
                              src={item.certificate || "/placeholder.svg"}
                              alt={`${item.title} Certificate`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover/cert:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/cert:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                              <button
                                onClick={() => setSelectedCertificate(item.certificate)}
                                className="opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View Certificate
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block z-10" />

                        {/* Right side - Content */}
                        <div className="md:pl-12 order-1 md:order-2">
                          <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground mb-3">{item.institution}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {item.date}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {selectedCertificate && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCertificate(null)}
          >
            <div className="relative max-w-4xl w-full bg-card rounded-lg overflow-hidden">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selectedCertificate || "/placeholder.svg"}
                  alt="Certificate"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
