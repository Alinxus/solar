// components/Navbar.tsx
"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const pathname = usePathname()

  // Handle scroll event for navbar styling and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background on scroll
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Track active section based on scroll position
      const sections = ['home', 'about', 'products', 'services', 'testimonials', 'blog', 'contact']
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Adjust this value based on your layout (considering navbar height)
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('#mobile-menu-button')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // Close mobile menu when a section is clicked
      setIsMenuOpen(false)
      
      // Scroll to the section with smooth behavior
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust offset based on navbar height
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Max Solar Power Company"
                width={40}
                height={40}
                className="mr-2 rounded-full"
              />
              <span className="font-bold text-xl md:text-2xl tracking-tight text-gray-900">
                MaxSolar<span className="text-orange-500">Power Company</span>
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center justify-center space-x-1">
            <NavLink id="home" label="Home" current={activeSection === 'home'} onClick={() => scrollToSection('home')} />
            <NavLink id="about" label="About" current={activeSection === 'about'} onClick={() => scrollToSection('about')} />
            <NavLink id="products" label="Products" current={activeSection === 'products'} onClick={() => scrollToSection('products')} />
            <NavLink id="services" label="Services" current={activeSection === 'services'} onClick={() => scrollToSection('services')} />
            <NavLink id="testimonials" label="Testimonials" current={activeSection === 'testimonials'} onClick={() => scrollToSection('testimonials')} />
            <NavLink id="blog" label="Blog" current={activeSection === 'blog'} onClick={() => scrollToSection('blog')} />
          </div>

          {/* Desktop Right Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors ${
                activeSection === 'contact' ? 'text-orange-500' : ''
              }`}
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('quote')}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-medium transition-colors shadow-sm hover:shadow flex items-center"
            >
              Get A Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-button"
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-orange-500 hover:bg-orange-50 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <MobileNavLink id="home" label="Home" current={activeSection === 'home'} onClick={() => scrollToSection('home')} />
          <MobileNavLink id="about" label="About" current={activeSection === 'about'} onClick={() => scrollToSection('about')} />
          
          {/* Mobile Products Accordion */}
          <div className="border-b border-gray-100 pb-1">
            <MobileNavAccordion 
              title="Products" 
              current={activeSection === 'products'}
              onClick={() => scrollToSection('products')}
              items={[
                { id: 'solar-panels', label: 'Solar Panels' },
                { id: 'energy-storage', label: 'Energy Storage' },
                { id: 'inverters', label: 'Inverters' },
                { id: 'products', label: 'View All Products' },
              ]}
              onItemClick={scrollToSection}
            />
          </div>
          
          <MobileNavLink id="services" label="Services" current={activeSection === 'services'} onClick={() => scrollToSection('services')} />
          <MobileNavLink id="testimonials" label="Testimonials" current={activeSection === 'testimonials'} onClick={() => scrollToSection('testimonials')} />
          <MobileNavLink id="blog" label="Blog" current={activeSection === 'blog'} onClick={() => scrollToSection('blog')} />
          <MobileNavLink id="contact" label="Contact" current={activeSection === 'contact'} onClick={() => scrollToSection('contact')} />
          
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('quote')}
              className="flex items-center justify-center w-full px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-base font-medium transition-colors"
            >
              Get A Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Regular Navigation Link Component (now a button)
function NavLink({ id, label, current, onClick }: { id: string; label: string; current: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative group ${
        current 
          ? 'text-orange-500' 
          : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
      }`}
    >
      {label}
      {current && (
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
      )}
    </button>
  )
}

// Mobile Navigation Link Component (now a button)
function MobileNavLink({ id, label, current, onClick }: { id: string; label: string; current: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium border-b border-gray-100 ${
        current 
          ? 'text-orange-500 bg-orange-50' 
          : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
      }`}
    >
      {label}
    </button>
  )
}

// Mobile Navigation Accordion Component
function MobileNavAccordion({ 
  title, 
  current, 
  items,
  onClick,
  onItemClick
}: { 
  title: string; 
  current: boolean; 
  items: { id: string; label: string }[];
  onClick: () => void;
  onItemClick: (id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <button
        className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
          current ? 'text-orange-500' : 'text-gray-700'
        }`}
        onClick={() => {
          setIsOpen(!isOpen)
          onClick()
        }}
      >
        <span>{title}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="pl-4 py-1 space-y-1">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => onItemClick(item.id)}
              className="block w-full text-left px-3 py-2 rounded-md text-sm text-gray-600 hover:text-orange-500 hover:bg-orange-50"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}