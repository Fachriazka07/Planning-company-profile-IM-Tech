"use client"

import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      className="relative w-full h-[371px] flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/about/background-about.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <div className="flex items-stretch">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
              className="w-[8px] bg-white mr-6 origin-top self-stretch"
            />

            <div className="flex flex-col justify-center py-4">
              <motion.h1
                variants={itemVariants}
                className="text-[32px] font-semibold text-white mb-4 leading-tight"
              >
                Tentang Kami
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-[20px] font-normal text-white leading-relaxed font-poppins"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;