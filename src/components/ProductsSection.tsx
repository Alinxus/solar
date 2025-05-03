// components/ProductsSection.tsx
"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Product = {
  id: number;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  badgeColor?: string;
};

export default function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [detailsProduct, setDetailsProduct] = useState<Product | null>(null);

  // Real products data based on the provided images
  const products: Product[] = [
    {
      id: 1,
      name: "Energy Storage Power System",
      category: "storage",
      description: "Portable solar energy storage system with multiple outputs for powering various devices. Perfect for homes, camping, and emergency backup power.",
      features: [
        "Multiple output outlets",
        "High-capacity battery",
        "Solar panel compatible",
        "LED indicators",
        "Portable design"
      ],
      image: "/storage-power.jpg", // Image 1
      rating: 4.9,
      reviewCount: 86,
      badge: "Best Seller",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      name: "CAFINI Solar-Powered Stand Fan",
      category: "appliances",
      description: "Energy-efficient stand fan that can be powered by solar energy. Features adjustable height and multi-speed settings for optimal comfort.",
      features: [
        "Solar power compatible",
        "Adjustable height",
        "Multi-speed control",
        "Energy efficient",
        "Low noise operation"
      ],
      image: "/wind-turbines.jpg", // Image 2
      rating: 4.7,
      reviewCount: 52,
      badge: "Energy Efficient",
      badgeColor: "bg-blue-500"
    },
    {
      id: 3,
      name: "CAFINI Mobile Power Station with Solar Panel",
      category: "power",
      description: "Compact 12000mAh mobile power station with integrated solar panel, perfect for outdoor activities and emergencies. Includes multiple charging options and built-in radio.",
      features: [
        "12000mAh capacity",
        "Solar panel included",
        "Built-in radio & music player",
        "Multiple LED lights",
        "Bluetooth connectivity"
      ],
      image: "/energy-manager.jpg", // Image 3
      rating: 4.8,
      reviewCount: 73,
      badge: "Multi-Function",
      badgeColor: "bg-purple-500"
    },
    {
      id: 4,
      name: "AFRICELL 450W Monocrystalline Solar Panel",
      category: "panels",
      description: "High-efficiency monocrystalline solar panel with 25-year lifespan. Perfect for residential and commercial solar installations seeking maximum energy conversion.",
      features: [
        "450W power output",
        "Monocrystalline technology",
        "25-year lifespan",
        "High efficiency design",
        "Weather-resistant construction"
      ],
      image: "/smart-grid.jpg", // Image 4
      rating: 4.9,
      reviewCount: 124,
      badge: "High Efficiency",
      badgeColor: "bg-orange-500"
    },
    {
      id: 5,
      name: "Solar Street Light",
      category: "lighting",
      description: "Bright LED solar street light with motion detection capabilities. Perfect for outdoor lighting needs with zero electricity costs and easy installation.",
      features: [
        "High-brightness LEDs",
        "Motion detection",
        "Waterproof design",
        "Auto on/off at dusk/dawn",
        "No wiring required"
      ],
      image: "/street-light.jpg", // Image 5
      rating: 4.6,
      reviewCount: 93
    },
    {
      id: 6,
      name: "Complete Home Solar System Kit",
      category: "systems",
      description: "All-in-one solar power system for homes, including panels, inverter, batteries, and all necessary accessories for a complete installation.",
      features: [
        "Complete installation kit",
        "Inverter included",
        "Battery storage system",
        "Mounting hardware",
        "Easy-to-follow instructions"
      ],
      image: "/solar-panel-large.jpg",
      rating: 4.8,
      reviewCount: 67,
      badge: "Complete Solution",
      badgeColor: "bg-green-500"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'panels', name: 'Solar Panels' },
    { id: 'storage', name: 'Energy Storage' },
    { id: 'power', name: 'Power Stations' },
    { id: 'lighting', name: 'Lighting' },
    { id: 'appliances', name: 'Solar Appliances' },
    { id: 'systems', name: 'Complete Systems' }
  ];

  // Close popup handlers
  const closeQuickView = () => setQuickViewProduct(null);
  const closeDetails = () => setDetailsProduct(null);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="text-sm text-gray-500 mb-2">(05) Our Products</div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sustainable Energy Solutions</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our range of high-quality products designed to harness renewable energy and reduce your carbon footprint.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
          <div className="flex space-x-2 mx-auto">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Product - Energy Storage System */}
        {(activeCategory === 'all' || activeCategory === 'storage') && (
          <div className="mb-12 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-auto">
                <Image
                  src="/storage-power.jpg"
                  alt="Energy Storage Power System"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800">Energy Storage Power System</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our premium Energy Storage Power System is a versatile solution for homes and businesses looking for reliable backup power. With multiple outlets and high capacity, it's perfect for powering essential devices during outages or for off-grid living.
                  </p>
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-gray-800 mb-2">Key Features:</div>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Multiple AC & DC outputs
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        High-capacity battery
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Solar panel compatible
                      </li>
                      <li className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Digital display & controls
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">Based on 86 reviews</span>
                  </div>
                  <Link href="/products/energy-storage" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors inline-flex items-center">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg relative"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative h-56">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-20' : 'opacity-0'}`}></div>
                <div className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setQuickViewProduct(product);
                    }}
                    className="bg-white text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-full font-medium text-sm inline-block transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="mb-4">
                  <div className="mb-1 flex items-center">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs text-gray-500">{product.reviewCount} reviews</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-600">
                        <svg className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                    {categories.find(cat => cat.id === product.category)?.name || product.category}
                  </span>
                  <button
                    onClick={() => setDetailsProduct(product)}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium inline-flex items-center"
                  >
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick View Popup */}
        {quickViewProduct && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeQuickView} // Close when clicking backdrop
          >
            <div 
              className="relative bg-white rounded-lg w-full max-w-xl mx-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking popup content
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={closeQuickView}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="relative h-64 sm:h-72">
                <Image 
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-4 border-t">
                <button
                  onClick={closeQuickView}
                  className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Details Popup */}
        {detailsProduct && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeDetails} // Close when clicking backdrop
          >
            <div 
              className="relative bg-white rounded-lg w-full max-w-3xl mx-auto max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking popup content
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={closeDetails}
                  className="text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="relative h-72 md:h-96">
                  <Image 
                    src={detailsProduct.image}
                    alt={detailsProduct.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{detailsProduct.name}</h3>
                  <p className="text-gray-600 mb-6">{detailsProduct.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {detailsProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${i < Math.floor(detailsProduct.rating) ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600">{detailsProduct.reviewCount} reviews</span>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <button
                  onClick={closeDetails}
                  className="w-full bg-gray-100 text-gray-800 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Table Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Compare Our Solutions</h3>
            <p className="text-gray-600">Find the perfect sustainable energy products to meet your specific needs</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product Type
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ideal For
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Average ROI
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Installation
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Maintenance
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lifespan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">Solar Panels</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Homes & Businesses</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">5-8 years</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Professional</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Minimal</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">25+ years</div>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">Energy Storage</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Any Property</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">3-5 years</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">DIY or Professional</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Minimal</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">10-15 years</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">Solar Lighting</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Outdoor Areas</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">1-2 years</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">DIY</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Low</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">5-10 years</div>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">Solar Appliances</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Homes & Offices</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">2-3 years</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">DIY</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Low</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">5-8 years</div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-800">Complete Systems</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Homes & Small Businesses</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">7-10 years</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Professional</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">Moderate</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-600">20+ years</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to switch to sustainable energy?</h3>
            <p className="text-white/90 mb-8">
              Our experts are ready to help you find the perfect solution for your home or business. Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products" className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium transition-colors">
                Browse All Products
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-white/20 border-2 border-white text-white px-6 py-3 rounded-full font-medium transition-colors">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}