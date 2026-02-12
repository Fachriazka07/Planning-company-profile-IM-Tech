'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Screenshot {
  title: string;
  imageUrl: string;
}

interface ProjectScreenshotsProps {
  gallery: Screenshot[];
}

const ProjectScreenshots = ({ gallery }: ProjectScreenshotsProps) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold mb-10 text-black text-left">
          Tampilan Proyek
        </h2>

        <div className="flex flex-wrap gap-8 justify-start items-end">
          {gallery.map((item, index) => {
            const titleLower = item.title.toLowerCase();
            const isMobile = titleLower.includes('mobile');
            const isTablet = titleLower.includes('tablet');
            
            let dimensions = 'h-[300px] md:h-[500px] aspect-[16/10]'; // Default Desktop (Largest)
            if (isTablet) dimensions = 'h-[350px] md:h-[450px] aspect-[3/4]'; // Medium
            if (isMobile) dimensions = 'h-[400px] md:h-[400px] aspect-[9/19]'; // Smallest relative scale

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center space-y-4"
              >
                <div 
                  className={`relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-gray-900 group bg-gray-900 ${dimensions}`}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glossy reflection effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50 pointer-events-none" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectScreenshots;
