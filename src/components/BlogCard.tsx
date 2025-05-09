"use client"

import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '@/lib/blogPosts' // Assuming lib is aliased to @ or directly accessible

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <Link href={`/blog/${post.slug}`} className="block">
        {post.imageUrl && (
          <div className="relative w-full h-56">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 mb-3">
            By {post.author} on {post.date}
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            {post.summary}
          </p>
          <span className="font-medium text-orange-500 hover:text-orange-600 transition-colors">
            Read more &rarr;
          </span>
        </div>
      </Link>
    </article>
  )
} 