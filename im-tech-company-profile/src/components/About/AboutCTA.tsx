"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TitleGradient } from '@/components/shared/title-gradient';

const AboutCTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Title - "Tertarik?" */}
          <TitleGradient as="h2" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 block">
            Tertarik?
          </TitleGradient>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-900 font-medium mb-8">
            Tertarik bekerja sama dengan kami?
          </p>

          {/* Button - "Get Started" */}
          <Link href="/contacts">
            <Button
              size="lg"
              className="px-8 py-6 text-lg font-bold bg-black text-white hover:bg-gray-800 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTA;
