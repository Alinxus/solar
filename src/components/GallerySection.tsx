// components/GallerySection.tsx
"use client"

import { useState } from 'react'
import Image from 'next/image'

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Residential Installation - Lagos",
      category: "residential",
      images: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
      description: "5kW system powering a family home in Lagos"
    },
    {
      id: 2,
      title: "Commercial Office - Abuja",
      category: "commercial",
      images: ["/project2-1.jpg", "/project2-2.jpg", "/project2-3.jpg"],
      description: "25kW system for an office complex in Abuja"
    },
    // Add more projects
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="text-sm text-gray-500 mb-2">(06) Our Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Completed Solar Installations</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            View our portfolio of successful solar energy projects across Nigeria.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setActiveCategory('residential')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'residential' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              Residential
            </button>
            <button 
              onClick={() => setActiveCategory('commercial')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'commercial' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              Commercial
            </button>
            <button 
              onClick={() => setActiveCategory('industrial')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'industrial' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              Industrial
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-2">
                  {project.images.slice(1).map((img, index) => (
                    <div key={index} className="relative w-16 h-16 rounded-md overflow-hidden">
                      <Image 
                        src={img}
                        alt={`${project.title} image ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}