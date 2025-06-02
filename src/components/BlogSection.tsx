// components/BlogSection.tsx
"use client"

import Image from 'next/image'

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 text-center">
          <div className="text-sm text-gray-500 mb-2">(04) Our Blog</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Latest Solar Energy News</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Stay informed about the latest trends and innovations in sustainable energy solutions and their impact on our environment.</p>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group">
            <div className="relative h-48">
              <Image 
                src="/solar-panels-close.jpg" 
                alt="Solar panels close up" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-orange-100 text-orange-600 rounded-full px-3 py-1 text-xs font-semibold mr-2">Featured</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Technology</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                The Future of Solar Technology in Nigeria
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Explore how advanced solar technology is transforming Nigeria's energy landscape and providing sustainable power solutions.
              </p>
              <div className="text-sm text-gray-500">2025</div>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group">
            <div className="relative h-48">
              <Image 
                src="/solar-farm.jpg" 
                alt="Solar farm" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-green-100 text-green-600 rounded-full px-3 py-1 text-xs font-semibold mr-2">Energy</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Industry</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                Sustainable Energy Solutions for Businesses
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                How Nigerian businesses are reducing costs and increasing reliability with solar power systems.
              </p>
              <div className="text-sm text-gray-500">April 20, 2025</div>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group">
            <div className="relative h-48">
              <Image 
                src="/solar-battery.jpg" 
                alt="Solar battery storage" 
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-blue-100 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold mr-2">Innovation</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Storage</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                Advances in Solar Storage Technology
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Latest developments in battery storage solutions making 24/7 solar power a reality.
              </p>
              <div className="text-sm text-gray-500">April 15, 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}