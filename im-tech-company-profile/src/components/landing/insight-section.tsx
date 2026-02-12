'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { TitleGradient } from '@/components/shared/title-gradient';

// BACKEND NOTE: Bagian ini nantinya akan dihubungkan ke tabel 'articles' di Supabase.
import insightData from '@/data/insightdummy.json';

interface InsightItem {
  id: number;
  date: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export function InsightSection() {
  const insights: InsightItem[] = insightData;

  return (
    <section id="insight" className="bg-[#F9FAFB] py-32 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <TitleGradient as="h2" className="text-3xl lg:text-4xl pb-2 mx-auto">
            Insight & Artikel
          </TitleGradient>
          <p className="text-[20px] font-medium text-black max-w-3xl mx-auto mt-4">
            Baca artikel terbaru kami tentang tren teknologi, tips pengembangan aplikasi, dan
            inovasi digital.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center">
          {insights.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[342px] bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Thumbnail Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                {/* Date */}
                <span className="text-[12px] text-gray-400 mb-3 block">{item.date}</span>

                {/* Title */}
                <h3 className="text-[16px] font-semibold text-black mb-3 leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[14px] text-gray-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                  {item.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Link href="/blog">
            <Button variant="pill">
              Selengkapnya
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
