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

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us / Passion Section */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="text-sm text-gray-500 mb-2">(01) About Us</div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our solar expertise</h2>
            <p className="text-gray-600 mb-6">
              Based on our deep understanding of solar technology and market trends, we are committed to providing innovative solar solutions that power your life sustainably.
            </p>
            <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="text-orange-500 inline-flex items-center hover:text-orange-600">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="text-center mb-6 md:mb-0">
              <div className="text-3xl font-bold mb-1 text-gray-800">2500+</div>
              <div className="text-sm text-gray-500">Installations</div>
            </div>
            <div className="text-center mb-6 md:mb-0">
              <div className="text-3xl font-bold mb-1 text-gray-800">97.5%</div>
              <div className="text-sm text-gray-500">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1 text-gray-800">15MW+</div>
              <div className="text-sm text-gray-500">Power Generated</div>
            </div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Our Services Section */}
          <div className="col-span-1 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm text-gray-500 mb-2">(02) Our Services</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Solar solutions for every need.</h3>
            <div className="mb-6 relative h-48 w-full">
              <Image 
                src="/solar-panels.jpg" 
                alt="Solar panels" 
                fill
                className="object-cover rounded-md"
              />
            </div>
            
            {/* Service Categories - Accordion Style */}
            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('professional')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800">Professional Installation</div>
                  <div className={`transition-transform duration-200 ${openSection === 'professional' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'professional' && (
                  <div className="mt-2 text-sm text-gray-600">
                    Our certified technicians provide expert installation of all solar products, 
                    ensuring optimal placement, secure mounting, and maximum energy production.
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('quality')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800">Maintenance & Support</div>
                  <div className={`transition-transform duration-200 ${openSection === 'quality' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'quality' && (
                  <div className="mt-2 text-sm text-gray-600">
                    We offer comprehensive maintenance packages to keep your solar system performing at peak efficiency, with 24/7 monitoring and scheduled cleaning services.
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('affordability')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800">Financing Options</div>
                  <div className={`transition-transform duration-200 ${openSection === 'affordability' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'affordability' && (
                  <div className="mt-2 text-sm text-gray-600">
                    Make solar affordable with our flexible payment plans, leasing options, 
                    and assistance with government rebates and tax incentives.
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-gray-200">
              <div className="py-4 cursor-pointer" onClick={() => toggleSection('innovation')}>
                <div className="flex justify-between items-center">
                  <div className="font-medium text-gray-800">System Design</div>
                  <div className={`transition-transform duration-200 ${openSection === 'innovation' ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                {openSection === 'innovation' && (
                  <div className="mt-2 text-sm text-gray-600">
                    Our expert engineers create custom solar system designs tailored to your 
                    specific energy needs, roof configuration, and local climate conditions.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Service Cards - Middle Column */}
          <div className="col-span-1 space-y-8">
            {/* 01 Card */}
            <div className="relative group bg-white p-6 rounded-lg shadow-sm">
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
              <p className="text-sm text-gray-600">Complete solar solutions for homes that reduce energy bills and carbon footprint. Our systems include high-efficiency panels, inverters, and optional battery storage.</p>
            </div>

            {/* 02 Card */}
            <div className="bg-gray-900 text-white p-6 rounded-lg relative group shadow-sm">
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
              <p className="text-sm text-gray-300">Scalable solar power systems for businesses of all sizes, with custom designs to maximize ROI. Our commercial installations help reduce operational costs and meet sustainability goals.</p>
            </div>

            {/* 03 Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg relative group shadow-sm">
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
              <p className="text-sm text-gray-600">Our advanced battery systems store excess solar energy for use during peak rate periods or power outages. Available in various capacities to suit your energy needs and budget.</p>
            </div>
          </div>

          {/* Right Section with Value and Blog */}
          <div className="col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-2">(03) Our Value</div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">Power your life with sunshine.</h3>
            </div>
            
            {/* 04 Card */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg relative group shadow-sm">
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
              <p className="text-sm text-gray-600">Track your solar system's performance in real-time with our sophisticated monitoring tools. View energy production, consumption, and savings from your smartphone or computer.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-sm text-gray-500 mb-2">(04) Our Blog</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Solar insights & updates</h3>
              <button onClick={() => document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth' })} className="text-orange-500 flex items-center mb-8 hover:text-orange-600">
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {/* Blog posts links */}
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <div className="mb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Technology</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Innovation</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 group-hover:text-orange-500 transition-colors duration-200">The Latest Advances in Solar Panel Efficiency</h4>
                  <div className="flex mt-2">
                    <div className="flex space-x-4">
                      <div>
                        <span className="block text-xs text-gray-500">Category</span>
                        <span className="block text-sm font-medium text-gray-800">Technology</span>
                      </div>
                      <div>
                        <span className="block text-xs text-gray-500">Products</span>
                        <span className="block text-sm font-medium text-gray-800">Solar Panels</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}