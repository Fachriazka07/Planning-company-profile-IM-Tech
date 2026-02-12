'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ChallengesLearning = ({ challenges, websiteUrl }: { challenges: string[]; websiteUrl?: string }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold mb-8 text-black text-left">
          Tantangan & Pembelajaran
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <ul className="space-y-4 max-w-2xl">
            {challenges.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 text-lg text-black leading-relaxed"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          {websiteUrl && (
            <motion.a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-8 py-3 bg-[#2F2F2F] text-white font-medium text-lg hover:bg-black transition-colors shadow-lg whitespace-nowrap"
            >
              Kunjungi Website
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChallengesLearning;
