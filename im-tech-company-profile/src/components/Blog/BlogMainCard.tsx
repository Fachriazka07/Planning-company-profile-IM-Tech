import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

interface BlogPost {
  id: number | string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category?: string;
  stats?: {
    views: number;
    comments: number;
  };
}

export const BlogMainCard = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.id}`} className="group block h-full">
      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="relative w-full h-[240px] overflow-hidden p-3 pb-0">
            <div className="relative w-full h-full rounded-t-2xl rounded-b-md overflow-hidden">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4 flex flex-col flex-grow">
          <div className="text-sm text-gray-400 mb-3">{post.date}</div>
          
          <h3 className="text-xl font-bold text-black mb-3 leading-snug group-hover:text-[#00AAFF] transition-colors">
            {post.title}
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          
{/* Stats removed */}
        </div>
      </div>
    </Link>
  );
};
