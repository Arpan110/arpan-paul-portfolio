'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun, Home, User, FileText, Briefcase, ImageIcon, Send } from 'lucide-react'
import { useTheme } from 'next-themes'

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: FileText },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Projects', href: '#portfolio', icon: ImageIcon },
  { name: 'Contact', href: '#contact', icon: Send },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()

  // ==============================
  // FIX: Avoid hydration mismatch
  // ==============================
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent'
      }fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      <nav className="container mx-auto px-4 h-16 grid grid-cols-3 items-center">
        <Link href="/" className={`relative z-50 group ${isMenuOpen ? 'hidden' : 'flex'} md:flex`}>
          <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15),0_4px_12px_rgba(0,0,0,0.6),0_0_20px_rgba(96,165,250,0.3)] border border-cyan-500/30 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-[0_10px_25px_rgba(0,0,0,0.7),0_0_40px_rgba(96,165,250,0.5)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/10 opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="relative z-50 drop-shadow-[0_0_5px_rgba(96,165,250,0.6)] group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]">
              <defs>
                <linearGradient id="ap-gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
              <path
                d="M8 32 L24 8 L24 32 M13 22 H24 M24 8 H30 C35 8 38 11 38 15 C38 19 35 22 30 22 H24"
                stroke="url(#ap-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 justify-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.substring(1) ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ml-62 justify-end">
          {/* FIXED THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg transition-transform hover:scale-110 hover:bg-accent z-50 relative"
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors z-50 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-background border-r border-border z-40 md:hidden transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">

          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="relative z-50 group">
              <div className="relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-cyan-500/30 overflow-hidden shadow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-600/10" />

                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" className="relative z-10">
                  <defs>
                    <linearGradient id="ap-gradient-mobile" x1="0" y1="0" x2="40" y2="40">
                      <stop offset="0%" stopColor="#22D3EE" />
                      <stop offset="50%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 32 L24 8 L24 32 M13 22 H24 M24 8 H30 C35 8 38 11 38 15 C38 19 35 22 30 22 H24"
                    stroke="url(#ap-gradient-mobile)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <ul className="space-y-4 flex-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`flex items-center gap-4 w-full text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-accent'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="text-xs text-muted-foreground text-center mt-auto">
            &copy; {new Date().getFullYear()} Arpan Paul
          </div>
        </div>
      </div>
    </header>
  )
}
