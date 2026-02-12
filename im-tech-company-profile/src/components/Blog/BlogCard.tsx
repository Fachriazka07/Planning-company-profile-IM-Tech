import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  id: number | string;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  slug?: string;
}

export function BlogCard({ id, date, title, excerpt, imageUrl, slug }: BlogCardProps) {
  const href = slug ? `/blog/${slug}` : `/blog/${id}`;

  return (
    <Link href={href} className="group block">
      <div
        className="w-full max-w-[342px] h-[418px] bg-white border border-gray-100 rounded-[39px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
      >
        {/* Thumbnail Image */}
        <div className="relative w-full h-[167px] overflow-hidden rounded-[39px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="px-6 py-6 flex flex-col flex-1">
          {/* Date */}
          <span className="text-[12px] text-[#00AAFF] font-medium mb-3 block">
            {date}
          </span>

          {/* Title */}
          <h3 className="text-[20px] font-semibold text-black mb-3 leading-snug line-clamp-2 group-hover:text-[#00AAFF] transition-colors">
            {title}
          </h3>

          {/* Excerpt */}
          <p className="text-[14px] text-gray-500 leading-relaxed line-clamp-4 flex-1">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}
