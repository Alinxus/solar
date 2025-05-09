// components/HeroSection.tsx
"use client"

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [statsCount, setStatsCount] = useState({ homes: 0, tons: 0, installations: 0 })
  const targetStats = { 
    homes: 3000,  // Updated for Nigerian market
    tons: 8500,   // Updated energy generation numbers
    installations: 180   // Updated installation count
  }
  
  // Animate the stats numbers
  useEffect(() => {
    const duration = 2000 // 2 seconds for the animation
    const interval = 20 // Update every 20ms for smooth animation
    const steps = duration / interval
    
    const incrementValues = {
      homes: targetStats.homes / steps,
      tons: targetStats.tons / steps,
      installations: targetStats.installations / steps
    }
    
    let currentStep = 0
    
    const timer = setInterval(() => {
      currentStep++
      
      setStatsCount({
        homes: Math.min(Math.round(incrementValues.homes * currentStep), targetStats.homes),
        tons: Math.min(Math.round(incrementValues.tons * currentStep), targetStats.tons),
        installations: Math.min(Math.round(incrementValues.installations * currentStep), targetStats.installations)
      })
      
      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)
    
    return () => clearInterval(timer)
  }, [])

  // Auto-play the video when component mounts
  useEffect(() => {
    const videoElement = videoRef.current
    if (videoElement) {
      // Listen for when video can play
      const handleCanPlay = () => {
        setVideoLoaded(true)
      }
      
      videoElement.addEventListener('canplay', handleCanPlay)
      
      // Try to play the video
      const playPromise = videoElement.play()
      
      // Handle potential autoplay restrictions in browsers
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Autoplay prevented by browser:', error)
          // Add a muted attribute and try again (most browsers allow muted autoplay)
          videoElement.muted = true
          videoElement.play().catch(e => console.log('Still cannot play:', e))
        })
      }
      
      return () => {
        videoElement.removeEventListener('canplay', handleCanPlay)
      }
    }
  }, [])

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.6
      }
    }
  }

  // Background patterns for design elements
  const heroPattern = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`

  return (
    <section className="w-full overflow-hidden bg-gradient-to-br from-white to-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background design elements */}
        <div className="absolute top-0 right-0 w-96 h-96 -mt-24 -mr-12 opacity-20 pointer-events-none" style={{ backgroundImage: `url("${heroPattern}")` }}></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange-100 opacity-30 blur-3xl pointer-events-none transform -translate-x-1/2 translate-y-1/4"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-16">
          {/* Left content with animations */}
          <motion.div 
            className="flex flex-col justify-center z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative element */}
            <motion.div
              variants={itemVariants} 
              className="mb-4"
            >
              <span className="px-3 py-1 text-xs font-semibold text-orange-600 bg-orange-100 rounded-full uppercase tracking-wider">Nigeria's Leading Solar Provider</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Power Your Future <span className="text-orange-500">→</span> No Grid Required!
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Experience uninterrupted power supply with our premium solar solutions. Say goodbye to generator noise and fuel costs, and hello to clean, reliable energy for your home or business.
            </motion.p>
            
            {/* CTA buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link 
                href="/calculator" 
                className="px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-medium rounded-full shadow hover:shadow-md transition-all duration-300 flex items-center border border-gray-200"
              >
                Calculate Savings
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            
            {/* Stats section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                  {statsCount.homes.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Nigerian Homes Powered</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                  {statsCount.tons.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">kWh Generated Daily</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-2xl md:text-3xl font-bold text-orange-500 mb-1">
                  {statsCount.installations.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </motion.div>
            
            {/* Team with trust indicators */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center mt-8 space-x-4"
            >
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative z-10">
                  <Image
                    src="/avatar1.jpg"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative z-0">
                  <Image
                    src="/avatar2.jpg"
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative z-0">
                  <div className="w-full h-full bg-orange-500 flex items-center justify-center text-white font-medium text-xs">20+</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">4.9 (200+ reviews)</span>
                </div>
                <div className="text-xs text-gray-500">Trusted by homes and businesses across Nigeria</div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right content with video */}
          <div className="lg:mt-0 relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] transform lg:translate-x-10"
            >
              {/* Decorative elements */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-orange-500 rounded-br-full opacity-90 z-10"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-bl-full opacity-10 z-10"></div>
              
              {/* Animated loading overlay */}
              <motion.div 
                className="absolute inset-0 bg-gray-900 flex items-center justify-center z-20"
                initial={{ opacity: 1 }}
                animate={{ opacity: videoLoaded ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                style={{ display: videoLoaded ? 'none' : 'flex' }}
              >
                <div className="text-center">
                  <svg className="animate-spin h-10 w-10 text-orange-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <p className="text-white font-medium">Loading solar technology in action...</p>
                </div>
              </motion.div>
              
              {/* Video element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/building-image.jpg"
                playsInline
                loop
                preload="metadata"
                muted={true}
                onCanPlay={() => setVideoLoaded(true)}
              >
                <source src="/sustainable-energy-video.mp4" type="video/mp4" />
                <source src="/sustainable-energy-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              
              {/* Video overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
              
              {/* Company achievements overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <div className="flex items-center space-x-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <h3 className="text-white font-bold text-lg">Premium Solar Solutions Provider</h3>
                    <p className="text-gray-300 text-sm">Professional installation with 2-year service warranty</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Client logos */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 p-6 bg-white rounded-xl shadow-lg lg:-ml-16 z-20 relative"
            >
              <div className="text-sm text-gray-600 mb-3 font-medium">Partnered with industry leaders</div>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                    <path d="M10 10h20v10H10z" fill="#4285F4"/>
                    <path d="M40 10h20v10H40z" fill="#34A853"/>
                    <path d="M70 10h20v10H70z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                    <circle cx="20" cy="15" r="10" fill="#0A66C2"/>
                    <circle cx="50" cy="15" r="10" fill="#0A66C2"/>
                    <circle cx="80" cy="15" r="10" fill="#0A66C2"/>
                  </svg>
                </div>
                <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                  <svg className="h-8" viewBox="0 0 100 30" fill="currentColor">
                    <rect width="30" height="20" x="10" y="5" rx="2" fill="#FF9900"/>
                    <rect width="30" height="20" x="60" y="5" rx="2" fill="#FF9900"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="w-full overflow-hidden">
        <svg className="w-full h-auto" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L30 113.3C60 106.7 120 93.3 180 84C240 74.7 300 69.3 360 74.7C420 80 480 96 540 96C600 96 660 80 720 64C780 48 840 32 900 37.3C960 42.7 1020 69.3 1080 80C1140 90.7 1200 85.3 1260 74.7C1320 64 1380 48 1410 40L1440 32V0H1410C1380 0 1320 0 1260 0C1200 0 1140 0 1080 0C1020 0 960 0 900 0C840 0 780 0 720 0C660 0 600 0 540 0C480 0 420 0 360 0C300 0 240 0 180 0C120 0 60 0 30 0H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}