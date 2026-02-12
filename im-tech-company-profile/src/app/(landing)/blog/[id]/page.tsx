import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { LatestPostItem } from '@/components/Blog/LatestPostItem';
import insightData from '@/data/insightdummy.json';
export async function generateStaticParams() {
  return insightData.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = insightData.find((p) => p.id.toString() === id);

  if (!post) {
    notFound();
  }
  const latestPosts = insightData.filter(p => p.id !== post.id).slice(0, 4);

  return (
    <main className="bg-white min-h-screen pb-20">
      <div className="w-full h-[400px] lg:h-[500px] relative mb-12 bg-gray-100">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <article className="lg:col-span-2">
            <div className="text-[#00AAFF] font-semibold text-sm uppercase tracking-wider mb-4">
              Terbaru, {post.category || 'Umum'}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="text-gray-400 text-sm mb-10">
              {post.date}
            </div>
            <div 
              className="max-w-none text-gray-700 leading-relaxed [&>p]:mb-6 [&>p]:text-lg [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-8"
              dangerouslySetInnerHTML={{ __html: post.content || '' }}
            />
          </article>
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-xl font-bold text-black mb-6 border-b border-gray-100 pb-4">
                Latest Post
              </h3>
              <div className="flex flex-col gap-4">
                {latestPosts.map((item) => (
                  <LatestPostItem key={item.id} post={item as any} />
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
