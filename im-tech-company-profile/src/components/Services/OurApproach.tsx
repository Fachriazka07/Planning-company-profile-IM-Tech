"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TitleGradient } from '@/components/shared/title-gradient';

const OurApproach = () => {
  const approaches = [
    "Mengerti Kebutuhan Anda",
    "Desain Dengan Baik",
    "Bangun Dengan Kualitas", 
    "Selesai Tepat Waktu"
  ];

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <TitleGradient className="mb-16 text-[32px] md:text-[40px] font-bold mx-auto">
            Pendekatan Kami
        </TitleGradient>
        
        <div className="flex flex-wrap justify-center gap-8">
          {approaches.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-[300px] h-[90px] bg-black text-white flex items-center justify-center font-semibold text-[16px] shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
