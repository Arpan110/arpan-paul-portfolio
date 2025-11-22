import React from 'react'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Qualification } from '@/components/qualification'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Contact } from '@/components/contact'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Preloader } from '@/components/preloader'

export default function Home() {
  return (
    <>
      <Preloader />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
