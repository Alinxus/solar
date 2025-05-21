// components/ServicesSection.tsx
"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function ServicesSection() {
  // State for service details accordion
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  // Image gallery for services
  const serviceImages = [
    {
      id: 1,
      src: "/solar-home.jpg", // Residential installation image
      alt: "Residential solar installation"
    },
    {
      id: 2,
      src: "/solar-business.jpg", // Commercial installation image
      alt: "Commercial solar installation"
    },
    {
      id: 3,
      src: "/solar-maintenance.jpg", // Maintenance image
      alt: "Solar panel maintenance"
    },
    {
      id: 4,
      src: "/solar-monitor.jpg", // Monitoring image
      alt: "Solar system monitoring"
    }
  ]

  return (
    <section id="services" className="py-12 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-orange-100 opacity-30 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-48 bg-blue-100 opacity-20 rounded-tr-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Us / Passion Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-sm text-gray-500 mb-2">(01) About Us</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nigeria's Solar Energy Experts</h2>
            <p className="text-gray-600 mb-6">
              With over 10 years of experience delivering renewable energy solutions across Nigeria, 
              we've helped thousands of homes and businesses escape power outages and high electricity 
              costs through our advanced solar technology systems.
            </p>
            <div className="flex items-center mb-6">
              <div className="h-1 w-16 bg-orange-500 mr-4"></div>
              <p className="text-gray-700 italic font-medium">
                "We bring uninterrupted power to a nation ready for reliable energy."
              </p>
            </div>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-orange-500 inline-flex items-center hover:text-orange-600">
              Read more about our mission
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/about-team.jpg"
                alt="Our expert team"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/about-installation.jpg"
                alt="Solar installation"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/about-panels.jpg"
                alt="Solar panels"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/about-monitoring.jpg"
                alt="System monitoring"
                fill
                className="object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex flex-col md:flex-row justify-between bg-white p-8 rounded-xl shadow-md mb-16">
          <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/icons/icon-installations.svg"
                alt="Installations icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">250+</div>
            <div className="text-sm text-gray-500">Installations</div>
          </div>
          <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/icons/icon-satisfaction.svg" 
                alt="Satisfaction icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">100%</div>
            <div className="text-sm text-gray-500">Satisfied Clients</div>
          </div>
          <div className="text-center mb-6 md:mb-0 flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/icons/icon-power.svg"
                alt="Power icon" 
                fill
                className="object-contain"
              />
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">15MW+</div>
            <div className="text-sm text-gray-500">Power Generated</div>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="relative w-16 h-16 mb-4">
              <Image
                src="/icons/icon-savings.svg"
                alt="Savings icon"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-3xl font-bold mb-1 text-gray-800">₦1M+</div>
            <div className="text-sm text-gray-500">Client Savings</div>
          </div>
        </div>

        {/* Service Images Carousel */}
        <div className="mb-16 overflow-hidden">
          <div className="text-center mb-8">
            <div className="text-sm text-gray-500 mb-2">(02) Our Impact</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Transforming Nigeria With Solar Power</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {serviceImages.map((image) => (
              <div key={image.id} className="relative h-64 rounded-xl overflow-hidden shadow-md group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-medium">{image.alt}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Services Section */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">(03) Our Services</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Premium Solar Solutions</h3>
            <div className="mb-6 relative h-48 w-full">
              <Image 
                src="/solar-panels.jpg" 
                alt="Solar panels" 
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                Premium Quality
              </div>
            </div>
            
            {/* Service Categories - Accordion Style */}
            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('professional')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800 flex items-center">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    Professional Installation
                  </div>
                  <div className={`transition-transform duration-200 ${openSection === 'professional' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'professional' && (
                  <div className="mt-2 pl-10">
                    <div className="text-sm text-gray-600 mb-4">
                      Our certified technicians have installed over 2,500 systems across Nigeria, 
                      ensuring optimal placement, secure mounting, and maximum energy production.
                    </div>
                    <div className="relative h-32 w-full rounded-md overflow-hidden mb-4">
                      <Image 
                        src="/solar-install.jpg" 
                        alt="Professional installation process" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Nigeria-certified installers with extensive local experience
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Specialized equipment for any roof type and location
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Safety-certified practices for residential and commercial buildings
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('quality')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800 flex items-center">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    Maintenance & Support
                  </div>
                  <div className={`transition-transform duration-200 ${openSection === 'quality' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'quality' && (
                  <div className="mt-2 pl-10">
                    <div className="text-sm text-gray-600 mb-4">
                      We offer comprehensive maintenance packages to keep your solar system performing 
                      at peak efficiency, with 24/7 monitoring and scheduled cleaning services.
                    </div>
                    <div className="relative h-32 w-full rounded-md overflow-hidden mb-4">
                      <Image 
                        src="/solar-maintain.jpg" 
                        alt="Solar maintenance service" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Real-time system monitoring for immediate issue detection
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Quarterly panel cleaning to maintain optimal efficiency
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        24/7 technical support from our Lagos service center
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('affordability')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800 flex items-center">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    Financing Options
                  </div>
                  <div className={`transition-transform duration-200 ${openSection === 'affordability' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'affordability' && (
                  <div className="mt-2 pl-10">
                    <div className="text-sm text-gray-600 mb-4">
                      Make solar affordable with our flexible payment plans, leasing options, 
                      and assistance with government rebates available in Nigeria.
                    </div>
                    <div className="relative h-32 w-full rounded-md overflow-hidden mb-4">
                      <Image 
                        src="/solar-finance.jpg" 
                        alt="Solar financing options" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Pay-as-you-go plans with low monthly payments
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Partner bank financing with competitive interest rates
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Assistance with claiming REA (Rural Electrification Agency) incentives
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('innovation')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800 flex items-center">
                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    System Design
                  </div>
                  <div className={`transition-transform duration-200 ${openSection === 'innovation' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'innovation' && (
                  <div className="mt-2 pl-10">
                    <div className="text-sm text-gray-600 mb-4">
                      Our expert engineers create custom solar system designs tailored to your 
                      specific energy needs and Nigeria's unique climate conditions.
                    </div>
                    <div className="relative h-32 w-full rounded-md overflow-hidden mb-4">
                      <Image 
                        src="/solar-design.jpg" 
                        alt="Solar system design" 
                        fill
                        className="object-cover"
                      />
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        3D modeling for optimal panel placement and energy production
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Load analysis to determine exact system requirements
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Climate-specific calculations for Nigeria's unique solar conditions
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Service Cards - Middle Column */}
          <div className="col-span-1 space-y-8">
            {/* 01 Card */}
            <div className="relative group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute right-4 top-4 flex space-x-1">
                <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mb-4 font-semibold text-gray-800">01</div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-medium text-gray-800">Residential Solar Systems</h4>
                <div className="border border-gray-200 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Complete solar solutions for Nigerian homes that eliminate power outages and reduce energy bills by up to 80%. Our residential systems include high-efficiency panels, advanced inverters, and battery storage optimized for Nigeria's climate.</p>
              
              <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/solar-home.jpg" 
                  alt="Residential solar installation" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-500" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Most Popular
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>3-15kW Systems</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>2-3 Day Install</span>
                </div>
              </div>
            </div>

            {/* 02 Card */}
            <div className="bg-gray-900 text-white p-6 rounded-lg relative group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute right-4 top-4 flex space-x-1">
                <button className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mb-4 font-semibold text-white">02</div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-medium text-white">Commercial Solar Solutions</h4>
                <div className="bg-orange-500 text-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">Scalable solar power systems for Nigerian businesses of all sizes - from SMEs to large corporations. Our commercial installations reduce operational costs by 50-70% and provide reliable power for critical business operations.</p>
              
              <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/solar-business.jpg" 
                  alt="Commercial solar installation" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-500" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Highest ROI
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>20-500kW Systems</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>1-2 Week Install</span>
                </div>
              </div>
            </div>

            {/* 03 Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg relative group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute right-4 top-4 flex space-x-1">
                <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mb-4 font-semibold text-gray-800">03</div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-medium text-gray-800">Energy Storage Solutions</h4>
                <div className="border border-gray-200 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Our advanced battery systems store excess solar energy for use during nighttime or power outages. These Nigerian-climate optimized storage solutions ensure 24/7 power availability with zero reliance on generators or NEPA.</p>
              
              <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/solar-battery.jpg" 
                  alt="Energy storage systems" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-purple-500" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Most Reliable
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500">
                <div className="flex items-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>5-200kWh Capacity</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10-15 Year Lifespan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section with Value and Blog */}
          <div className="col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-lg shadow-sm text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="text-sm text-orange-100 mb-2">(04) Our Value</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">The Max Solar Power Difference</h3>
                <p className="text-orange-50 mb-6">
                  What sets us apart is our deep understanding of Nigeria's unique energy challenges. Our systems are specifically designed for:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Nigeria's climate conditions and seasonal variations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Local power challenges (unreliable grid, frequent outages)</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dust resistance for harmattan season</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Cost optimization for the Nigerian market</span>
                  </li>
                </ul>
                
                <div className="relative h-48 w-full rounded-lg overflow-hidden mb-4">
                  <Image 
                    src="/value-difference.jpg" 
                    alt="MaxSolar installation team" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* 04 Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg relative group shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute right-4 top-4 flex space-x-1">
                <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <div className="mb-4 font-semibold text-gray-800">04</div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-medium text-gray-800">Solar Monitoring Systems</h4>
                <div className="border border-gray-200 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Track your solar system's performance with our innovative monitoring platform. View energy production, consumption, and savings from your smartphone or computer with real-time data and alerts.</p>
              
              <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                <Image 
                  src="/solar-app.jpg" 
                  alt="Solar monitoring platform" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex items-end">
                  <div className="p-4">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-blue-500" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Smart Technology
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                  Mobile App
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                  Real-time Data
                </span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-medium text-gray-800">
                  Alerts & Notifications
                </span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-2">(05) Our Blog</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Solar insights & updates</h3>
              <button onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })} className="text-orange-500 flex items-center mb-6 hover:text-orange-600">
                Read our latest articles
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Latest blog post */}
              <div className="rounded-lg overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-shadow duration-300">
                <div className="relative h-40">
                  <Image 
                    src="/blog-solar-nigeria.jpg" 
                    alt="Solar in Nigeria" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-white font-medium text-lg">The Future of Solar Energy in Nigeria</h4>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">April 25, 2025</span>
                    <span className="bg-orange-100 text-orange-800 rounded-full px-2 py-0.5 text-xs font-medium">
                      Industry News
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    Despite challenges, Nigeria's solar market is expanding rapidly with new government incentives and growing consumer demand for reliable power alternatives...
                  </p>
                  <button className="text-orange-500 text-sm font-medium flex items-center hover:text-orange-600">
                    Continue reading
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success Stories Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="text-sm text-gray-500 mb-2">(06) Success Stories</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Real Results for Nigerian Customers</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our solar solutions have transformed businesses and homes across Nigeria with reliable power and significant cost savings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/solar-success1.jpg" 
                  alt="Residential success story" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold">From 6 Hours to 24/7 Power</h4>
                  <p className="text-gray-200 text-sm">Lagos Residential Installation</p>
                  </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Before installing solar, we only had power for 6 hours daily. Now we enjoy 24/7 electricity with zero generator noise. Our energy bills dropped from ₦48,000 to under ₦10,000 monthly!"
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">OA</div>
                  <div className="ml-3">
                    <h5 className="font-medium text-gray-800">Oluwaseun Adeyemi</h5>
                    <p className="text-xs text-gray-500">Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>5kW System</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>79% Bill Reduction</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/solar-success2.jpg" 
                  alt="Hospital success story" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold">Critical Healthcare Power</h4>
                  <p className="text-gray-200 text-sm">Abuja Medical Center</p>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Our 75kW solar system powers critical medical equipment 24/7. It has been 100% reliable for over 2 years, saving us ₦1.2M monthly on diesel generators and providing clean energy for patient care."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 font-bold">DO</div>
                  <div className="ml-3">
                    <h5 className="font-medium text-gray-800">Dr. Onyeka Nwankwo</h5>
                    <p className="text-xs text-gray-500">Medical Director</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>75kW System</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>₦14.4M Annual Savings</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Success Story 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/solar-success3.jpg" 
                  alt="Business success story" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white font-bold">Manufacturing Powerhouse</h4>
                  <p className="text-gray-200 text-sm">Kano Industrial Complex</p>
                </div>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 text-sm italic">
                    "Our 200kW solar system has eliminated production interruptions due to power outages. We've increased output by 35% and reduced energy costs by ₦2.8M monthly. The ROI was just 2.5 years."
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 font-bold">MI</div>
                  <div className="ml-3">
                    <h5 className="font-medium text-gray-800">Mohammed Ibrahim</h5>
                    <p className="text-xs text-gray-500">Operations Director</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>200kW System</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>₦33.6M Annual Savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500 opacity-10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Energy Experience?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of satisfied customers across Nigeria who have escaped power outages, reduced energy costs, and embraced clean, reliable solar power.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                >
                  Get Your Free Quote
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Our Experts
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/solar-cta1.jpg" 
                    alt="Solar installation" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/solar-cta2.jpg" 
                    alt="Monitoring app" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/solar-cta3.jpg" 
                    alt="Battery storage" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40 rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src="/solar-cta4.jpg" 
                    alt="Happy customer" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}