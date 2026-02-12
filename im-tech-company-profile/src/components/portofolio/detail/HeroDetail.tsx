'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroDetailProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  gallery?: { title: string; imageUrl: string }[];
}

const HeroDetail = ({ category, title, description, imageUrl, gallery = [] }: HeroDetailProps) => {
  // Use gallery images if available, otherwise fallback to main imageUrl for the grid
  const img2 = gallery[0]?.imageUrl || imageUrl;
  const img3 = gallery[1]?.imageUrl || imageUrl;

  return (
    <section className="pt-32 pb-16 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1536px]">
        {/* Back Button */}
        <div className="mb-12">
          <Link 
            href="/portofolio" 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors gap-2 text-base font-medium"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>

        {/* Text Content */}
        <div className="mb-16 max-w-4xl">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
              {title}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl text-justify">
              {description}
            </p>
          </motion.div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[410px]">
          {/* Main Image (Left - Takes up 3/4 columns approx to hit ~1100px on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 relative h-[300px] lg:h-full w-full overflow-hidden shadow-sm"
          >
             <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Right Column (2 stacked images) */}
          <div className="lg:col-span-1 flex flex-col gap-6 h-[410px] lg:h-full">
            {/* Top Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex-1 rounded-2xl overflow-hidden shadow-sm w-full"
            >
              <Image
                src={img2}
                alt="Detail view 1"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* Bottom Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative flex-1 overflow-hidden shadow-sm w-full"
            >
              <Image
                src={img3}
                alt="Detail view 2"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDetail;
