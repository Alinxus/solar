import { getPostBySlug, BlogPost, blogPosts } from '@/lib/blogData';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-md text-gray-500">
            Published on {post.date} in <span className="text-orange-500 font-medium">{post.metaCategory} / {post.metaIndustry}</span>
          </p>
          {post.categoryTags && post.categoryTags.length > 0 && (
            <div className="mt-4">
              {post.categoryTags.map(tag => (
                <span key={tag} className="inline-block bg-gray-100 text-gray-700 rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {post.imageUrl && (
          <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden shadow-xl mb-10">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div 
          className="prose prose-lg sm:prose-xl max-w-none prose-p:text-gray-700 prose-headings:text-gray-800 prose-a:text-orange-500 hover:prose-a:text-orange-600 prose-strong:text-gray-800 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-img:rounded-md prose-img:shadow-md"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link href="/blog" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors">
            &larr; Back to All Posts
          </Link>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return blogPosts.map(post => ({
    slug: post.slug,
  }));
}

// Optional: Generate static paths if you know all slugs at build time
// export async function generateStaticParams() {
//   const { blogPosts } = await import('@/lib/blogData');
//   return blogPosts.map(post => ({
//     slug: post.slug,
//   }));
// } 