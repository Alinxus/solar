"use client"

import BlogCard from '@/components/BlogCard' // Adjust path if necessary
import { blogPosts } from '@/lib/blogPosts'   // Adjust path if necessary
import { motion } from 'framer-motion'

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
          >
            Solar Insights & News
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest articles, tips, and success stories from the world of solar energy in Nigeria.
          </motion.p>
        </motion.div>

        {blogPosts.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {blogPosts.map((post) => (
              <motion.div key={post.slug} variants={itemVariants}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p 
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-center text-gray-600 text-lg"
          >
            No blog posts available at the moment. Check back soon!
          </motion.p>
        )}
      </div>
    </div>
  )
} 