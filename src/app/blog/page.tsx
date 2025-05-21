import { blogPosts, BlogPost } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Our Blog</h1>
        <p className="mt-4 text-xl text-gray-600">Explore our latest articles, news, and insights on sustainable energy.</p>
      </header>

      {blogPosts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts yet. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col">
              <Link href={`/blog/${post.slug}`} className="block flex flex-col flex-grow">
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
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {post.date} - <span className="font-medium">{post.metaCategory}</span>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <span className="mt-auto font-medium text-orange-500 hover:text-orange-600 transition-colors self-start">
                    Read more &rarr;
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
} 