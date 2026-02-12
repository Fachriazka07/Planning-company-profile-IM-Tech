"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { TitleGradient } from '@/components/shared/title-gradient';

const ServicesCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <TitleGradient className="mb-4 text-[40px] font-bold mx-auto">
          Tertarik?
        </TitleGradient>
        
        <p className="text-[24px] text-black-600 font-medium mb-8">
          Tertarik bekerja sama dengan kami?
        </p>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-[400px] h-[70px] bg-black text-white flex items-center justify-center font-medium text-[23px] shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Get Started
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;