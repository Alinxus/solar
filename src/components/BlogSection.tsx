// components/BlogSection.tsx
"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 md:flex md:items-end md:justify-between">
          <div>
            <div className="text-sm text-gray-500 mb-2">(04) Our Blog</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Explore our news & update today</h2>
            <p className="text-gray-600 max-w-2xl">Stay informed about the latest trends and innovations in sustainable energy solutions and their impact on our environment.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/blog" className="inline-flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
              View all articles
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto scrollbar-hide space-x-4 mb-8 pb-2">
          <button 
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              activeTab === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Articles
          </button>
          <button 
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              activeTab === 'tech' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Technology
          </button>
          <button 
            onClick={() => setActiveTab('solar')}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              activeTab === 'solar' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Solar Energy
          </button>
          <button 
            onClick={() => setActiveTab('wind')}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              activeTab === 'wind' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Wind Energy
          </button>
          <button 
            onClick={() => setActiveTab('hydro')}
            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
              activeTab === 'hydro' 
                ? 'bg-orange-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Hydroelectric
          </button>
        </div>

        {/* Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Article - Spans 2 columns on larger screens */}
          <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-6 flex flex-col justify-between order-2 md:order-1">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-orange-100 text-orange-600 rounded-full px-3 py-1 text-xs font-semibold mr-2">Featured</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Technology</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                    How Solar Energy is Revolutionizing Transportation Industry
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    Explore how solar power is transforming the way we think about transportation, from solar-powered vehicles to charging infrastructure that's changing the future of mobility.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <div className="flex space-x-4">
                        <div>
                          <span className="block text-xs text-gray-500">Category</span>
                          <span className="block text-sm font-medium text-gray-800">Technology</span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">Industry</span>
                          <span className="block text-sm font-medium text-gray-800">Solar</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">April 24, 2025</div>
                    </div>
                    <Link href="/blog/solar-transportation" className="text-orange-500 text-sm font-medium flex items-center hover:text-orange-600 transition-colors">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-full order-1 md:order-2">
                <Image 
                  src="/solar-panels-close.jpg" 
                  alt="Solar panels on building" 
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:bg-none"></div>
              </div>
            </div>
          </div>

          {/* Standard Article Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group">
            <div className="relative h-48">
              <Image 
                src="/solar-farm.jpg" 
                alt="Solar farm" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Building</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Concept</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors line-clamp-2">
                Renewable energy revolution: Clean power on the rise
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Discover how renewable energy sources are gaining momentum globally and reshaping our approach to power generation and consumption.
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex space-x-4 mb-2">
                    <div>
                      <span className="block text-xs text-gray-500">Category</span>
                      <span className="block text-sm font-medium text-gray-800">Technology</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500">Industry</span>
                      <span className="block text-sm font-medium text-gray-800">Solar</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">April 20, 2025</div>
                </div>
                <Link href="/blog/renewable-revolution" className="text-orange-500 text-sm font-medium flex items-center hover:text-orange-600 transition-colors">
                  Read
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* More Article Cards - These would normally be in a map function with real data */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group">
            <div className="relative h-48">
              <Image 
                src="/wind-turbines.jpg" 
                alt="Wind turbines" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Energy</span>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Wind</span>
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors line-clamp-2">
                The Future of Wind Energy: Innovations and Challenges
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                Explore the cutting-edge developments in wind energy technology and the obstacles the industry must overcome for widespread adoption.
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="flex space-x-4 mb-2">
                    <div>
                      <span className="block text-xs text-gray-500">Category</span>
                      <span className="block text-sm font-medium text-gray-800">Technology</span>
                    </div>
                    <div>
                      <span className="block text-xs text-gray-500">Industry</span>
                      <span className="block text-sm font-medium text-gray-800">Wind</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">April 15, 2025</div>
                </div>
                <Link href="/blog/wind-energy-future" className="text-orange-500 text-sm font-medium flex items-center hover:text-orange-600 transition-colors">
                  Read
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md group lg:col-span-2">
            <div className="grid md:grid-cols-2 h-full">
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-green-100 text-green-600 rounded-full px-3 py-1 text-xs font-semibold mr-2">New</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">Sustainability</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-orange-500 transition-colors">
                    Smart Grids: The Backbone of Tomorrow's Energy Infrastructure
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    How intelligent energy distribution networks are transforming our power systems, optimizing efficiency, and enabling the integration of various renewable energy sources into a unified grid.
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <div className="flex space-x-4">
                        <div>
                          <span className="block text-xs text-gray-500">Category</span>
                          <span className="block text-sm font-medium text-gray-800">Infrastructure</span>
                        </div>
                        <div>
                          <span className="block text-xs text-gray-500">Industry</span>
                          <span className="block text-sm font-medium text-gray-800">Energy</span>
                        </div>
                      </div>
                      <div className="mt-3 text-xs text-gray-500">April 10, 2025</div>
                    </div>
                    <Link href="/blog/smart-grids" className="text-orange-500 text-sm font-medium flex items-center hover:text-orange-600 transition-colors">
                      Read more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-full">
                <Image 
                  src="/smart-grid.jpg" 
                  alt="Smart grid visualization" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gray-900 rounded-xl p-8 md:p-10 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-600/20"></div>
          <div className="relative z-10 md:max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay updated with our newsletter</h3>
            <p className="text-gray-300 mb-6">
              Get the latest news, updates, and insights about sustainable energy solutions delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-400 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}