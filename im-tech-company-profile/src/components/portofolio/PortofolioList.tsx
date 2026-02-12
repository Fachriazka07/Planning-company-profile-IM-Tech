'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import showcaseData from '@/data/showcasedummy.json';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  techStack: string[];
}

const PortofolioList = () => {
  const portfolio: PortfolioItem[] = showcaseData;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Portfolio Cards */}
        <motion.div
          layout
          className="flex flex-col gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {portfolio.map((item, index) => {
              const isImageLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full max-w-[1600px] mx-auto rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  style={{
                    backgroundColor: '#F9FAFB',
                    minHeight: '406px',
                  }}
                >
                  <Link href={`/portofolio/${item.id}`} className="block h-full cursor-pointer">
                    <div
                      className={`flex flex-col md:flex-row ${
                        !isImageLeft ? 'md:flex-row-reverse' : ''
                      } h-full`}
                      style={{ padding: '50px', gap: '50px', minHeight: '406px' }}
                    >
                      {/* Image Section */}
                      <div
                        className="relative rounded-xl overflow-hidden flex-shrink-0 group"
                        style={{
                          width: '100%',
                          maxWidth: '700px',
                          height: '306px',
                        }}
                      >
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                      </div>

                      {/* Content Section */}
                      <div className="flex flex-col justify-center flex-1 min-w-0">
                        <h3 className="text-[32px] font-bold text-black mb-6 leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[16px] text-black leading-relaxed mb-8 text-justify opacity-90">
                          {item.description}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-3">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-6 py-2.5 text-[14px] font-semibold text-gray-800 bg-[#F3F4F6] hover:bg-white transition-colors duration-300 cursor-default shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortofolioList;
