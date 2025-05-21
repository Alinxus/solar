// components/ClientsSection.tsx
"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
};

export default function ClientsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Oluwaseun Adebayo",
      role: "CEO",
      company: "AdebayoGroup Ltd",
      quote: "Max Solar Power has transformed our business operations in Lagos. Their solar solutions have cut our power costs by 60% and practically eliminated our dependence on generators."
    },
    {
      id: 2,
      name: "Dr. Sarah Okonjo",
      role: "Medical Director",
      company: "Prime Hospital, Abuja",
      quote: "The reliability of Max Solar Power's systems has been crucial for our hospital. We now have 24/7 power supply, ensuring our medical equipment runs continuously."
    },
    {
      id: 3,
      name: "Mohammed Ibrahim",
      role: "Property Manager",
      company: "Ibrahim Heights, Kano",
      quote: "Installing Max Solar Power's solar solutions in our residential complex has been a game-changer. Our tenants enjoy uninterrupted power supply and significantly reduced electricity bills."
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-sm text-gray-500 mb-2">(03) Client Reviews</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover how our sustainable energy solutions have helped businesses and organizations across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Testimonials Carousel */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
            {/* Navigation buttons */}
            <div className="absolute top-4 right-4 z-10 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold mr-4">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeTestimonial].role} - {testimonials[activeTestimonial].company}</p>
                </div>
              </div>
              
              <blockquote className="text-gray-800 text-lg italic mb-6">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>

              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full mx-1 transition-all duration-300 ${
                      activeTestimonial === index ? 'w-8 bg-orange-500' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column with CTA and Info */}
          <div className="flex flex-col space-y-8">
            {/* CTA Box */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="absolute right-0 top-0 w-40 h-40 bg-blue-700 rounded-full -mr-16 -mt-16 opacity-30"></div>
              <div className="absolute left-0 bottom-0 w-24 h-24 bg-blue-700 rounded-full -ml-12 -mb-12 opacity-20"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Have questions about <span className="text-orange-400">solar panels?</span></h3>
                <p className="text-blue-100 mb-8">
                  Our experts are ready to answer all your questions and help you find the perfect sustainable energy solution for your needs.
                </p>
                <div className="flex justify-center md:justify-start">
                  <button className="bg-orange-500 text-white rounded-full py-3 px-8 font-medium hover:bg-orange-600 transition-colors flex items-center shadow-lg">
                    Let's Talk!
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-sm text-gray-800 font-medium">Customer Satisfaction</div>
                <div className="text-xs text-gray-500 mt-1">Based on 500+ reviews</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-sm text-gray-800 font-medium">Customer Support</div>
                <div className="text-xs text-gray-500 mt-1">Always here to help</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-orange-500 mb-2">10+</div>
                <div className="text-sm text-gray-800 font-medium">Years Experience</div>
                <div className="text-xs text-gray-500 mt-1">Industry expertise</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-sm text-gray-800 font-medium">Projects</div>
                <div className="text-xs text-gray-500 mt-1">Successfully completed</div>
              </div>
            </div>
            
            {/* Company Info and Social Links */}
            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
              <div className="mb-3 font-bold text-xl text-gray-800">CONCEPT.</div>
              <p className="text-gray-600 mb-6">
                The utilization of solar and wind energy does not generate carbon emissions or pollutants, creating a cleaner future for generations to come.
              </p>
              
              <div className="flex space-x-4 mb-6">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Pages</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">Home</Link>
                    <Link href="/about" className="text-gray-600 hover:text-orange-500 transition-colors">About Us</Link>
                    <Link href="/services" className="text-gray-600 hover:text-orange-500 transition-colors">Services</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-orange-500 transition-colors">Contact</Link>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">Services</div>
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <Link href="/services/monitoring" className="text-gray-600 hover:text-orange-500 transition-colors">Monitoring</Link>
                    <Link href="/services/consulting" className="text-gray-600 hover:text-orange-500 transition-colors">Consulting</Link>
                    <Link href="/services/installation" className="text-gray-600 hover:text-orange-500 transition-colors">Installation</Link>
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