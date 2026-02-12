'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface Feature {
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  features: Feature[];
}

const KeyFeatures = ({ features }: KeyFeaturesProps) => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-2xl font-bold mb-10 text-black">
          Fitur Utama
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F9FAFB] p-6 flex items-center gap-4 transition-colors"
            >
              <div className="flex-shrink-0 text-blue-600">
                <BookOpen size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-gray-900">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
