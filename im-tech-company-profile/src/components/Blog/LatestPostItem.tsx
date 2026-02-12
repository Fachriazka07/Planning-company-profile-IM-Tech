import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number | string;
  title: string;
  imageUrl: string;
  category?: string;
  date: string;
}

export const LatestPostItem = ({ post }: { post: BlogPost }) => {
  return (
    <Link href={`/blog/${post.id}`} className="group flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
      {/* Thumbnail */}
      <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden shrink-0">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-xs font-medium text-gray-400 mb-1">
          Terbaru, <span className="text-green-600">{post.category || 'Umum'}</span>
        </span>
        <h4 className="text-sm font-semibold text-black leading-snug group-hover:text-[#00AAFF] transition-colors line-clamp-2">
          {post.title}
        </h4>
      </div>
    </Link>
  );
};
